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
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pt-8 sm:px-10">
      <a href="/">
        <img src="/assets/logo.svg" alt="DM.Agency" />
      </a>
      <span
        className="p-.5 cursor-pointer px-2"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {!menuIsOpen ? <MenuIcon /> : <CloseIcon />}
      </span>
      <ul className="hidden gap-16 lg:flex">
        <li className="text-lg font-bold text-peach-dark">
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
      <div className="hidden items-center lg:flex">
        <a
          href=""
          className="inline-block px-8 py-2 font-bold text-peach-light"
        >
          Log In
        </a>
        <a
          href=""
          className="inline-block bg-peach-dark px-6 py-3 font-black text-[#fff]"
        >
          Sign Up
        </a>
        {/* <svg
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
        </svg> */}
      </div>
    </div>
  );
};

export default Nav;
