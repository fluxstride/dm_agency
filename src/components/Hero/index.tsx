const Hero = () => {
  return (
    <div className="px-5 xl:px-24 container  mx-auto mt-12 sm:mt-28">
      <div className="lg:grid grid-cols-5 gap-7">
        <h1 className="mb-4 lg:mb-0 text-3xl sm:text-4xl lg:text-5xl font-bold col-span-3 xl:text-6xl">
          You’ve Got A Business, We Have Got Brilliant Minds
        </h1>
        <div className="col-span-2">
          <p className="text-gray md:text-lg mb-12 text-gray-200">
            Founded in 2022 by a team of professional designers, developers &
            creative thinkers
          </p>
          <div>
            <a
              href=""
              className="text-sm sm:text-md font-black bg-black text-[#fff] px-3 py-2  sm:px-6 sm:py-3 inline-block mr-5  ring-black ring-1"
            >
              Get Started
            </a>
            <a
              href=""
              className="text-sm sm:text-md font-black text-peach-dark px-3 py-2  sm:px-6 sm:py-3 inline-block ring-peach-dark ring-1"
            >
              Play Video
            </a>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-5  lg:gap-10 mt-16">
        <img src="/assets/hero_image_1.png" alt="" className=" w-full" />
        <img src="/assets/hero_image_2.png" alt="" className=" w-full" />
        <img src="/assets/hero_image_3.png" alt="" className=" w-full" />
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10 mt-12 mb-40">
        <div className="px-10 py-14 sm:px-12 sm:py-16 bg-blue text-center text-[#fff]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            99%
          </h2>
          <p className="mb-3 font-bold">Client retetion</p>
          <p className="text-light">100% satisfy clients in Our Work</p>
        </div>
        <div className="px-12 py-16 bg-peach-dark text-center text-[#fff]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            12+
          </h2>
          <p className="mb-3 font-bold">Years of experience</p>
          <p className="text-light">The world wide best experience</p>
        </div>
        <div className="px-12 py-16 bg-yellow-light text-center text-[#fff]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            80+
          </h2>
          <p className="mb-3 font-bold">Professionals</p>
          <p className="text-light">Best and professional our work</p>
        </div>
        <div className="px-12 py-16 bg-black text-center text-[#fff]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            50M
          </h2>
          <p className="mb-3 font-bold">Project done</p>
          <p className="text-light">99% succesfully all Project done</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
