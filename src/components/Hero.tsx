import { metrics } from "../data/metrix";

const Hero = () => {
  return (
    <div className="mx-auto mt-[4.5rem] max-w-7xl px-5 sm:mt-28 sm:px-10">
      <div className="grid-cols-5 gap-7 lg:grid">
        <h1 className="col-span-3 mb-4 text-3xl font-bold sm:text-4xl lg:mb-0 lg:text-5xl xl:text-6xl ">
          You’ve Got A Business, We Have Got Brilliant Minds
        </h1>
        <div className="col-span-2">
          <p className="text-gray mb-12 text-gray-300 md:text-lg">
            Founded in 2022 by a team of professional designers, developers &
            creative thinkers
          </p>
          <div>
            <a
              href=""
              className="sm:text-md mr-5 inline-block bg-black px-3 py-2 text-sm  font-black text-[#fff] ring-1 ring-black  sm:px-6 sm:py-3"
            >
              Get Started
            </a>
            <a
              href=""
              className="sm:text-md inline-block px-3 py-2 text-sm font-black text-peach-dark ring-1 ring-peach-dark sm:px-6 sm:py-3"
            >
              Play Video
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 grid gap-5 sm:grid-cols-3 lg:gap-10">
        <img
          src="/assets/hero_image_1.png"
          alt="Smilling business woman"
          className=" w-full"
        />
        <img
          src="/assets/hero_image_2.png"
          alt="Smilling business man"
          className=" w-full"
        />
        <img
          src="/assets/hero_image_3.png"
          alt="Smilling business woman"
          className=" w-full"
        />
      </div>

      <div className="mt-12 mb-40 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map(({ color, heading, title, text }) => (
          <div
            style={{ background: color }}
            className={`px-10 py-14 text-center text-[#fff] sm:px-12 sm:py-16`}
            key={title}
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="mb-3 font-bold">{title}</p>
            <p className="text-light">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
