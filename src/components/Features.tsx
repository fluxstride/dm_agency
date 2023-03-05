import { features } from "../data/features";

const Features = () => {
  return (
    <div className="bg-gray-200 py-14">
      <div className=" px-5 container mx-auto xl:px-24">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
          The Best Features We Present
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {features.map(({ id, icon, title, text, color }) => (
            <div className="bg-white px-8 py-12 md:p-12" key={id}>
              <img src={icon} alt="" />
              <h2 className="mt-8 mb-4 font-bold text-xl">{title}</h2>
              <p className="text-gray-300 mb-8">{text}</p>
              <a
                href=""
                style={{
                  color: color,
                }}
                className={`flex gap-3 font-bold`}
              >
                <span>Know More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={color}
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
