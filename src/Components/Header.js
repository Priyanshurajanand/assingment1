import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className=" h-[100px] p-[20px] flex justify-between align-middle ">
      <div className="text-[#06286E] flex gap-1 text-[40px]  h-[40px] ">
        <img
          src={logo}
          alt="logo"
          className="logo w-[50px] h-[39px] mt-[13px]"
        ></img>
        <div className="tracking-tighter">
          <span>Hygge</span>
          <span className="">
            <strong>X</strong>
          </span>
        </div>
      </div>
      <div className="links flex justify-end gap-[40px] top-[27px] text-[18px]">
        <div className="py-[13px] text-gray-500 font-medium flex justify-between gap-[40px]">
          <span>Home</span>
          <span href="/">Flashcard</span>
          <span>Contact</span>
          <span>FAQ</span>
        </div>
        <button
          className=" w-[128px] h-[48px] rounded-[32px]  bg-gradient-to-b from-[#06286E] to-[#164EC0] text-white cursor-context-menu"
          
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
