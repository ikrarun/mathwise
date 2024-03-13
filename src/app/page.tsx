import React from "react";

import { delaGothic as font } from "@/fontList";
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  return (
    <main className=" w-full min-h-full flex-grow flex-col flex px-6 py-3 items-center justify-start gap-6 max-w-[900px] ">

      {/* //TODO: Hero Section */}
      <section

        style={font.style}
        className="gap-3 flex flex-col w-full "
      >
        <div className="text-7xl break-before-avoid px-3 lg:text-8xl text-[#3049d3] flex flex-col sm:flex-row font-bold">
          <h1>
            Numera
          </h1>
          <h1>
            Nex
          </h1>
        </div>
        <h1 className="mt-3 break-before-auto px-3">If you want to be excellent at mathematics join us, right now.</h1>
        <h1 className="mt-3 break-before-auto px-3">
          Best Tutoring to unlock your full potential
        </h1>
      </section>

      {/* //TODO:informative section*/}
      <section
        className="gap-3 flex flex-col w-full "
        style={font.style}
      >
        <div className="w-full flex items-start justify-ceter  flex-col">
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

      {/* //TODO:Social Section */}

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
