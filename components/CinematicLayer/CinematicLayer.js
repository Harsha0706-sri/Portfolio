'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './CinematicLayer.module.css';

const CinematicLayer = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Mouse position references for parallax
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 5;
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,         // Transparent background
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // 4. Create radial glowing particle texture via Canvas
    const createGlowTexture = () => {
      const size = 64;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');

      const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.15, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.4, 'rgba(255, 160, 80, 0.3)');  // warm glowing aura
      gradient.addColorStop(0.7, 'rgba(255, 100, 30, 0.05)'); // very soft edge
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const particleTexture = createGlowTexture();

    // 5. Particle attributes and geometry
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const particlesData = [];
    const colorPalette = [
      new THREE.Color('#ffffff'), // White
      new THREE.Color('#ffe8d1'), // Soft warm white
      new THREE.Color('#ffaa66'), // Soft orange
      new THREE.Color('#ff7d3b'), // Deeper orange
      new THREE.Color('#ffb982'), // Bright amber
    ];

    for (let i = 0; i < particleCount; i++) {
      // Position particles in a 3D volume
      positions[i * 3] = (Math.random() - 0.5) * 14;      // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;  // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1; // Z (spread depth-wise)

      // Random color selection
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Dynamic sizes
      sizes[i] = Math.random() * 0.25 + 0.05;

      // Unique oscillation parameters
      particlesData.push({
        x: positions[i * 3],
        y: positions[i * 3 + 1],
        z: positions[i * 3 + 2],
        angle: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.0015,
        floatSpeed: 0.001 + Math.random() * 0.0015,
        wobbleSpeedX: 0.003 + Math.random() * 0.004,
        wobbleSpeedY: 0.002 + Math.random() * 0.003,
        amplitudeX: 0.15 + Math.random() * 0.25,
        amplitudeY: 0.15 + Math.random() * 0.25,
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom shaders for beautiful distance attenuation and additive glow
    const vertexShader = `
      attribute float size;
      attribute vec3 customColor;
      varying vec3 vColor;
      void main() {
        vColor = customColor;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        // Size scales based on distance (depth attenuation)
        gl_PointSize = size * (350.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      uniform sampler2D pointTexture;
      varying vec3 vColor;
      void main() {
        // Sample circle radial glow texture
        vec4 texColor = texture2D(pointTexture, gl_PointCoord);
        if (texColor.a < 0.01) discard; // Performance optimization
        gl_FragColor = vec4(vColor, 1.0) * texColor;
      }
    `;

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: { value: particleTexture },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      blending: THREE.AdditiveBlending,
      depthTest: true,
      depthWrite: false, // Don't write to depth buffer so particles blend additively behind each other
      transparent: true,
    });

    const particleSystem = new THREE.Points(geometry, shaderMaterial);
    scene.add(particleSystem);

    // 6. Resizing handler
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 7. Mouse movement tracking for camera parallax
    const handleMouseMove = (event) => {
      mouse.current.targetX = (event.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      mouse.current.targetY = (event.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 8. Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Camera parallax interpolation (easing)
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

      // Slow drift camera position based on mouse position
      camera.position.x = mouse.current.x * 0.7;
      camera.position.y = -mouse.current.y * 0.7; // invert y for standard mouse coordination
      camera.lookAt(0, 0, 0);

      // Animate particles in space
      const positionAttr = geometry.getAttribute('position');
      const array = positionAttr.array;

      for (let i = 0; i < particleCount; i++) {
        const data = particlesData[i];
        
        // Horizontal float drift (sine oscillation)
        data.angle += data.speed;
        
        // Wobble particles in x, y directions using wave functions
        const xOffset = Math.sin(data.angle * 2.0) * data.amplitudeX;
        const yOffset = Math.cos(data.angle * 1.5) * data.amplitudeY;

        // Vertically move particles upwards slowly
        data.y += data.floatSpeed;

        // Wrap around limits: x [-7, 7], y [-5, 5]
        if (data.y > 6) {
          data.y = -6;
        }

        // Apply updated positions
        array[i * 3] = data.x + xOffset;
        array[i * 3 + 1] = data.y + yOffset;
        array[i * 3 + 2] = data.z;
      }

      positionAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // 9. Clean up resources
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);

      // Dispose Three.js objects
      if (renderer) renderer.dispose();
      if (geometry) geometry.dispose();
      if (shaderMaterial) shaderMaterial.dispose();
      if (particleTexture) particleTexture.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.canvasContainer}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

export default CinematicLayer;
