import { specialists_outlines } from "../data/specialist_outlines";

const Specialist = () => {
  return (
    <div className="px-5 py-16 bg-gray-200  xl:px-24">
      <div className="container mx-auto grid lg:grid-cols-2">
        <div className="">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold lg:leading-normal">
            Specialist In Aviding Clients On Financial Challenges
          </h1>
          <p className="text-gray-300 mt-3 lg:leading-relaxed md:w-[95%]">
            We are idea generators, goaal seekers, challenge-thirty
            professionals, creators of unique internet project, We deliver
            unconv.
          </p>
          <div className="flex flex-col gap-6 mt-11">
            {specialists_outlines.map(({ id, icon, title, text }) => (
              <div className="sm:flex gap-4 md:w-[80%] items-start">
                <img className="w-16" src={icon} alt={title} />
                <div className="mt-4 sm:mt-0">
                  <h2 className="text-black font-bold text-xl sm:text-2xl">
                    {title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-normal  mt-1">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src="/assets/specialist.png" alt="" className="mt-16 lg:mt-0" />
      </div>
    </div>
  );
};

export default Specialist;
