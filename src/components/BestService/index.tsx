const BestServices = () => {
  return (
    <div className="px-5 py-24 xl:px-24 container  mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        Our Best Service
      </h1>
      <div className="grid sm:grid-cols-5">
        <div className="col-span-2">
          <p className="text-gray-200  w-full mb-6">
            We present the best digital marketing service carried out
            professionally
          </p>
          <img src="/assets/best_services.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default BestServices;
