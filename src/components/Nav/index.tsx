import React, { LegacyRef, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import CloseIcon from "./CloseIcon";
import MenuIcon from "./MenuIcon";

const navLinks = [
  { link: "Home", href: "" },
  { link: "Services", href: "#services" },
  { link: "About", href: "#about" },
  { link: "Blog", href: "#blog" },
];

const Nav = ({
  setTheme,
}: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [menuIsOpen, setIsMenuOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setIsMenuOpen(false));

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pt-8 sm:px-10">
      <a href="/">
        <img src="/assets/logo.svg" alt="DM.Agency" />
      </a>
      <div
        //@ts-ignore
        ref={ref}
      >
        <span
          className="p-.5 fixed top-7 right-8 z-10 cursor-pointer bg-white px-2 shadow-sm"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {menuIsOpen ? <CloseIcon /> : <MenuIcon />}
        </span>

        <ul
          className={`lg-px-0 fixed left-0 top-0 flex w-full transition-transform duration-300 ease-in-out ${
            menuIsOpen ? "-translate-y-0" : "-translate-y-[100%]"
          }  flex-col gap-4 bg-white py-8 px-4  pl-5 shadow-md sm:pl-10 lg:relative lg:w-fit lg:translate-y-0 lg:flex-row lg:gap-16 lg:bg-transparent lg:py-0 lg:pl-0 lg:shadow-none`}
        >
          {navLinks.map(({ link, href }, i) => (
            <li
              key={link}
              className={`text-lg ${
                i === 0 ? "font-bold text-peach-dark" : "text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <a href={href}>{link}</a>
            </li>
          ))}

          <div className="mt-8 flex items-center gap-4 lg:hidden">
            <a
              href=""
              className="block px-8 py-3 font-bold text-peach-light ring-2 ring-peach-light"
            >
              Log In
            </a>
            <a
              href=""
              className="block bg-peach-dark px-8 py-3 font-black text-[#fff] ring-1 ring-peach-dark"
            >
              Sign Up
            </a>
          </div>
        </ul>
      </div>
      <div className="hidden items-center gap-3 lg:flex">
        <a
          href=""
          className="inline-block px-8 py-2 font-bold text-peach-light"
          onClick={() => setIsMenuOpen(false)}
        >
          Log In
        </a>
        <a
          href=""
          className="inline-block bg-peach-dark px-6 py-3 font-black text-[#fff]"
          onClick={() => setIsMenuOpen(false)}
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
