import React from "react";
import { footer_items } from "../data/footer_items";

const Footer = () => {
  return (
    <div className="my-28 px-5 xl:px-24">
      <div className="container mx-auto">
        <div className="mb-28 items-center justify-between bg-yellow-deep px-4 py-14 text-white sm:px-28 sm:py-20 md:flex">
          <span>
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              Get Free Marketing Analysis
            </h2>
            <p className="mt-5 md:w-[80%]">
              Amet minim mallit non desnit Lorem Ipsum ast sit aliqua dolor do
              amet sit velit lorem ipsum velit
            </p>
          </span>
          <a
            href=""
            className="mt-8 inline-block bg-white py-4 px-10 font-bold text-yellow-deep sm:mt-0"
          >
            Contact
          </a>
        </div>
        <div className="grid grid-cols-2 gap-y-12 text-sm sm:grid-cols-3 lg:grid-cols-5 lg:text-base">
          {footer_items.map(({ type, heading, links, text }, i) => (
            <div key={heading} className={`${i === 0 && "col-span-2"}`}>
              <h2 className="mb-4 text-xl font-bold">{heading}</h2>
              {type === "text" ? (
                <p className="text-gray-300 sm:w-[80%]">{text}</p>
              ) : (
                <div className="flex flex-col gap-3 ">
                  {links?.map(({ href, text }) => (
                    <a key={text} href={href} className="text-gray-300">
                      {text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
