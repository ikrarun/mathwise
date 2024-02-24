import Image from "next/image";
import React from "react";
import logo from "./../assets/logo.svg";
const NavBar = () => {
  return (
    <div className=" w-full px-6 py-3 font-semibold text-white max-w-[700px] inline-flex justify-between">
      <Image src={logo} alt="" height="30" width="30" />
      <div></div>
    </div>
  );
};

export default NavBar;
