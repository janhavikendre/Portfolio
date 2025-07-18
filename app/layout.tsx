import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Janhavi - Full Stack Developer",
  description:
    "Portfolio of Janhavi - Full Stack Developer specializing in React, Next.js, and MERN stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <div className="relative w-full min-h-screen bg-black">
          {children}
        </div>
      </body>
    </html>
  );
}
