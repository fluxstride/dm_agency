import React, { useState } from "react";
import CloseIcon from "./CloseIcon";
import MenuIcon from "./MenuIcon";

const Nav = ({
  setTheme,
}: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [menuIsOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-5 xl:px-24 container  mx-auto  flex justify-between py-8 items-center">
      <img src="/assets/logo.svg" alt="" />
      <span
        className="p-.5 px-2 cursor-pointer"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {!menuIsOpen ? <MenuIcon /> : <CloseIcon />}
      </span>
      <ul className="hidden lg:flex gap-16">
        <li className="text-peach-dark font-bold text-lg">
          <a href="">Home</a>
        </li>
        <li className="text-lg dark:text-[#fff]">
          <a href="">Services</a>
        </li>
        <li className="text-lg dark:text-[#fff]">
          <a href="">About</a>
        </li>
        <li className="text-lg dark:text-[#fff]">
          <a href="">Blog</a>
        </li>
      </ul>
      <div className="hidden lg:flex items-center">
        <a
          href=""
          className="font-bold text-peach-light px-8 py-2 inline-block"
        >
          Log In
        </a>
        <a
          href=""
          className="font-black bg-peach-dark px-6 py-3 inline-block text-[#fff]"
        >
          Sign Up
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fff"
          className="w-6 h-6 ml-6 cursor-pointer"
          onClick={() => {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setTheme("dark");
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Nav;
