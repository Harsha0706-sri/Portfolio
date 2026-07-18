import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata = {
  title: {
    default: "K Sri Harsha Vardhan",
    template: "%s | Data Science & Big Data Analytics",
  },
  description: "Portfolio of K Sri Harsha Vardhan showcasing projects in Data Science, Big Data Analytics, Azure, Power BI, Java, Spring Boot, and Full Stack Development.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : new URL('http://localhost:3000'),
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "K Sri Harsha Vardhan | Data Science & Big Data Analytics",
    description: "Portfolio of K Sri Harsha Vardhan showcasing projects in Data Science, Big Data Analytics, Azure, Power BI, Java, Spring Boot, and Full Stack Development.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/ai-interview-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Portfolio showcase image"
      }
    ]
  },
  twitter: {
      card: "summary_large_image",
      title: "K Sri Harsha Vardhan | Data Science & Big Data Analytics",
      description: "Portfolio of K Sri Harsha Vardhan showcasing projects in Data Science, Big Data Analytics, Azure, Power BI, Java, Spring Boot, and Full Stack Development.",
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body style={{ backgroundColor: '#050508' }}>
        {children}
      </body>
    </html>
  );
}
