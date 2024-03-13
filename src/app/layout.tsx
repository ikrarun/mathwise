import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/navbar/navbar";
import { robotoFlex } from "@/fontList";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

export const metadata: Metadata = {
  title: "theMathWise",
  description: "A Venture of Scribewise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body
          className="w-full select-none flex pt-12 flex-col items-center text-lg min-h-screen"
          style={robotoFlex.style}
        >
          <div className="inline-flex fixed top-0 bg-[#3049d3] w-full items-center h-fit justify-center">
            <NavBar />
          </div>

          {children}
        </body>
      </PrimeReactProvider>
    </html>
  );
}
