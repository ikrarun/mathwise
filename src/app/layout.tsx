import type { Metadata } from "next";
import { Raleway as Font } from "next/font/google";
import "./globals.css";
import NavBar from "@/navbar/navbar";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MathWise",
  description: "a Venture of Scribewise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-full flex flex-col items-center text-lg min-h-screen"
        style={font.style}
      >
        <div className="inline-flex bg-[#e25e05] w-full items-center h-fit justify-center">
          <NavBar />
        </div>

        {children}
      </body>
    </html>
  );
}
