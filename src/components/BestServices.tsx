import { bestServices } from "../data/bestServices";

const BestServices = () => {
  return (
    <div className="container mx-auto px-5 py-24 xl:px-24">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl lg:text-4xl">
        Our Best Service
      </h1>
      <div className="grid gap-8 sm:grid-cols-4 md:grid-cols-5 lg:gap-16">
        <div className="sm:col-span-2">
          <p className="mb-6 w-full text-gray-300">
            We present the best digital marketing service carried out
            professionally
          </p>
          <img src="/assets/best_services.png" alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-10 px-6 sm:col-span-2 sm:px-0 md:col-span-3">
          {bestServices.map(({ id, service, sub_services }) => (
            <div key={id}>
              <div className="flex items-center justify-between space-x-1">
                <p className="text-4xl font-bold text-gray-100">{id}</p>
                <span className="h-[1.2px] w-full bg-gray-100"></span>
                <span className="flex items-center">
                  <span className="rounded-full bg-peach-dark p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="#fff"
                      className="h-6 w-6"
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
              <h2 className="mt-1 text-xl font-bold text-black sm:text-2xl">
                {service}
              </h2>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 sm:ml-10">
                {sub_services.map((service) => (
                  <div className="flex items-center space-x-4" key={service}>
                    <span className="inline-block h-4 w-4 rounded-full bg-yellow-deep"></span>{" "}
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
