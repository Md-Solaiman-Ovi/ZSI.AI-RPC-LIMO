const QuickPriceCheck = () => {
  return (
    <div className="mx-auto max-w-7xl bg-white px-4 py-20">
      {/* Title */}
      <h2 className="taviraj-regular mb-6 text-center text-2xl text-gray-800 md:text-4xl">
        Quick Price Check
      </h2>

      {/* Cards Section */}
      <div className="taviraj-regular my-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Hourly Rate", price: "Start from $60", icon: "⏰" },
          { title: "LGA AIRPORT", price: "Start from $80.00", icon: "✈️" },
          { title: "JFK AIRPORT", price: "Start from $90.00", icon: "✈️" },
          { title: "EWR AIRPORT", price: "Start from $100.00", icon: "✈️" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 rounded-lg bg-[rgba(218,145,0,1)] px-6 py-4 text-white shadow-md hover:bg-black md:flex-row md:justify-normal"
          >
            <div className="text-4xl">{item.icon}</div>
            <div className="flex flex-col gap-4">
              <h3 className="mt-2 text-[22px] font-semibold">{item.title}</h3>
              <p className="mt-1 text-xl">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-6 text-center lg:gap-16">
        <h1 className="mb-2 text-3xl font-normal md:text-5xl xl:text-[80px]">
          RPC LIMO NATIONWIDE
        </h1>
        <p className="text-lg text-black md:text-4xl">
          Headquarters in New York serving multiple cities.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <button className="bg-[rgba(218,145,0,1)] px-6 py-3 text-white shadow hover:bg-black">
            View Price & Book A Ride
          </button>
          <button className="bg-[rgba(218,145,0,1)] px-6 py-3 text-white shadow hover:bg-black">
            Toll free: 1-833 711 4606
          </button>
        </div>
      </div>
    </div>
  );
};
export default QuickPriceCheck;
