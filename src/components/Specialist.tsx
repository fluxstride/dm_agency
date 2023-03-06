import { specialists_outlines } from "../data/specialist_outlines";

const Specialist = () => {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto grid max-w-7xl px-5 py-16 sm:px-10 lg:grid-cols-2">
        <div className="">
          <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl lg:leading-normal">
            Specialist In Aviding Clients On Financial Challenges
          </h1>
          <p className="mt-3 text-gray-300 md:w-[95%] lg:leading-relaxed">
            We are idea generators, goaal seekers, challenge-thirty
            professionals, creators of unique internet project, We deliver
            unconv.
          </p>
          <div className="mt-11 flex flex-col gap-6">
            {specialists_outlines.map(({ id, icon, title, text }) => (
              <div className="items-start gap-4 sm:flex md:w-[80%]" key={id}>
                <img className="w-16" src={icon} alt={title} />
                <div className="mt-4 sm:mt-0">
                  <h2 className="text-xl font-bold text-black sm:text-2xl">
                    {title}
                  </h2>
                  <p className="mt-1 text-sm leading-normal  text-gray-300">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/assets/specialist.png"
          alt="Specialist"
          className="mt-16 lg:mt-0"
        />
      </div>
    </div>
  );
};

export default Specialist;
