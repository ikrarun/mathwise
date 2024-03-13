import React from "react";

import { delaGothic as font } from "@/fontList";
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  return (
    <main className=" w-full min-h-full flex-grow flex-col flex px-6 py-3 items-center justify-start gap-6 max-w-[900px] ">
      <section
        // Hero Section
        style={font.style}
        className="flex-col py-6 min-h-[50%] text-start items-start justify-start min-w-full  self-center"
      >
        <h1 className="text-7xl  lg:text-8xl text-[#3049d3]  font-bold">
          the
          <br />
          MathWise
        </h1>
        <h1>if you want to be excellent at mathematics join us, right now.</h1>
      </section>

      <section
        // informative section
        className="gap-3 flex flex-col my-6"
        style={font.style}
      >
        <h1 className="text-start font-extrabold text-xl lg:text-4xl">
          Best Tutoring to unlock your full potential
        </h1>
        
        {/* Pricing Section */}
        <div className="w-full flex items-start justify-ceter my-6 flex-col">
          <h1 className="text-4xl underline-offset-2 px-3 text-[#3049d3] underline">
            Pricing
          </h1>
          <div className="flex flex-col rounded-xl text-white my-3 w-full overflow-clip gap-1 ">
            <div className="flex  px-4 py-6 bg-[#3049d3] flex-col items-start w-full justify-start">
              <h1 className="text-2xl">250 / Months </h1>
              <h1 className="text-base">For Group Sessions.</h1>
              <h1 className="text-base">Most Affordable Option</h1>
            </div>
            <div className="flex  bg-[#3049d3] flex-col px-4 py-6 items-start w-full justify-start">
              <h1 className="text-2xl">3000 / Month </h1>
              <h1 className="text-base">One-to-One session.</h1>
            </div>

          </div>
        </div>
      </section>

      {/* Social Section 
 */}
      <section
        // Social Section
        className="w-full flex flex-col gap-4"
        style={font.style}
      >
        <h1 className="text-3xl ">Social</h1>
        <ul className="lg:w-1/2 gap-2 inline-flex">
          <Link
            href="https://twitter.com/theScribewise"
            target="_blank"
            className="rounded-full aspect-square p-2 text-white bg-[#3049d3]"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://instagram.com/theScribewise"
            target="_blank"
            className="rounded-full aspect-square p-2 text-white bg-[#3049d3]"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://t.me/theGodArun"
            target="_blank"
            className="rounded-full aspect-square p-2 text-white bg-[#3049d3]"
          >
            <FaTelegramPlane />
          </Link>
          <Link
            href="https://youtube.com/@theScribewise"
            target="_blank"
            className="rounded-full aspect-square p-2 text-white bg-[#3049d3]"
          >
            <FaYoutube />
          </Link>
        </ul>
      </section>
    </main>
  );
};

export default Home;
