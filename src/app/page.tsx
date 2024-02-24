import React from "react";
import { Dela_Gothic_One } from "next/font/google";
import logo from "./../assets/logo_black.svg";
import Image from "next/image";

const font = Dela_Gothic_One({ weight: "400", subsets: ["latin"] });

const Home = () => {
  return (
    <div className=" w-full min-h-full flex-grow flex px-6 py-3 max-w-[700px] ">
      <div
        style={font.style}
        className="flex-1 tracking-wide inline-flex min-h-[50%] items-center justify-between py-5"
      >
        <div className="flex flex-col w-1/2 items-start justify-start">
          <Image src={logo} alt="" height="30" width="30" />

          <h1 className="text-8xl text-[#e25e05] tracking-wider font-bold">
            the
            <br />
            MathWise
          </h1>
          <h1>
            if you want to be excellent at mathematics join us, right now.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
