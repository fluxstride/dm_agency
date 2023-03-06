import { features } from "../data/features";

const Features = () => {
  return (
    <div id="about" className="bg-gray-200 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
          The Best Features We Present
        </h1>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map(({ id, icon, title, text, color }) => (
            <div className="bg-white px-8 py-12 md:p-12" key={id}>
              <img src={icon} alt={title} />
              <h2 className="mt-8 mb-4 text-xl font-bold">{title}</h2>
              <p className="mb-8 text-gray-300">{text}</p>
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
                  className="h-6 w-6"
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
