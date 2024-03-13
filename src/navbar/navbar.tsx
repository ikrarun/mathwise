import Image from "next/image";
import React from "react";
import home from "./../assets/logo.svg";
import Link from "next/link";
import { raleway } from "@/fontList";

const NavBar = () => {
  return (
    <div
      style={raleway.style}
      className=" w-full py-3 z-[2000] px-6 font-semibold text-white max-w-[900px] inline-flex justify-between items-center"
    >
      <div>
        <Link href="/">
          <Image src={home} alt="" height="30" width="30" />
        </Link>
      </div>
      <ul>
        <Link
          className="bg-white text-black h-full flex px-4 hover:scale-110 transition-all ease-in-out duration-150 py-2 text-base rounded-full"
          href={"./book-trial"}
        >
          Book a free trial
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
