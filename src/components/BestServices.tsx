import { bestServices } from "../data/bestServices";

const BestServices = () => {
  return (
    <div className="px-5 py-24 xl:px-24 container  mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        Our Best Service
      </h1>
      <div className="grid sm:grid-cols-4 md:grid-cols-5 gap-8 lg:gap-16">
        <div className="sm:col-span-2">
          <p className="text-gray-300 w-full mb-6">
            We present the best digital marketing service carried out
            professionally
          </p>
          <img src="/assets/best_services.png" alt="" className="w-full" />
        </div>
        <div className="sm:col-span-2 md:col-span-3 flex flex-col gap-10 px-6 sm:px-0">
          {bestServices.map(({ id, service, sub_services }) => (
            <div key={id}>
              <div className="flex justify-between items-center space-x-1">
                <p className="text-4xl font-bold text-gray-100">{id}</p>
                <span className="w-full h-[1.2px] bg-gray-100"></span>
                <span className="flex items-center">
                  <span className="p-3 bg-peach-dark rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="#fff"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </span>
              </div>
              <h2 className="text-black font-bold text-xl sm:text-2xl mt-1">
                {service}
              </h2>
              <div className="mt-4 flex gap-x-6 gap-y-3 flex-wrap sm:ml-10">
                {sub_services.map((service) => (
                  <div className="flex space-x-4 items-center" key={service}>
                    <span className="inline-block w-4 h-4 bg-yellow-deep rounded-full"></span>{" "}
                    <p className="text-gray-300">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestServices;
