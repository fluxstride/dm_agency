import React from "react";
import { footer_items } from "../data/footer_items";

const Footer = () => {
  return (
    <div className="px-5 xl:px-24  my-28">
      <div className="container mx-auto">
        <div className=" bg-yellow-deep text-white px-4 py-14 sm:px-28 sm:py-20 md:flex items-center justify-between mb-28">
          <span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Get Free Marketing Analysis
            </h2>
            <p className="mt-5 md:w-[80%]">
              Amet minim mallit non desnit Lorem Ipsum ast sit aliqua dolor do
              amet sit velit lorem ipsum velit
            </p>
          </span>
          <a
            href=""
            className="text-yellow-deep bg-white py-4 px-10 font-bold inline-block mt-8 sm:mt-0"
          >
            Contact
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 text-sm lg:text-base">
          {footer_items.map(({ type, heading, links, text }, i) => (
            <div key={heading} className={`${i === 0 && " col-span-2"}`}>
              <h2 className="text-xl font-bold mb-4">{heading}</h2>
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
