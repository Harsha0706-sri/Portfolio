import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata = {
  title: "P. Akshay Reddy | Full Stack Developer",
  description: "Portfolio of P. Akshay Reddy, Full Stack Developer and AI Enthusiast.",
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
