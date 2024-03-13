import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/navbar/navbar";
import { delaGothic, robotoFlex } from "@/fontList";


export const metadata: Metadata = {
  title: "NumeraNex",
  description: "A Venture of Scribewise",
};

const copyright = String.fromCodePoint(0x00A9);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-full select-none flex pt-12 flex-col items-center text-lg min-h-screen"
        style={robotoFlex.style}
      >
        <div className="inline-flex fixed top-0 bg-[#3049d3] w-full items-center h-fit justify-center">
          <NavBar />
        </div>

        {children}
        <div style={delaGothic.style} className="w-full inline-flex items-center justify-center bg-black text-white h-10">
          <div
            className=" w-full px-6 font-semibold text-white max-w-[900px] inline-flex  items-center"
          >
            <h1 className="font-thin">{copyright} 2024</h1>

          </div>
        </div>
      </body>
    </html>
  );
}
