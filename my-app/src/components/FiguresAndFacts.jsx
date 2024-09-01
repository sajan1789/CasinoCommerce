import React from "react";

const FiguresAndFacts = () => {
  const stats = [
    { value: "180+", label: "Global Currencies" },
    { value: "13.5K", label: "Casino Games" },
    { value: "130+", label: "Game Providers" },
    { value: "370K", label: "Monthly Sports Events" },
    { value: "35K", label: "Live Events" },
    { value: "50+", label: "Live Casino Brands" },
  ];

  return (
    <div className=" text-gray-100  py-4 px-8 w-full bg-black shadow-md mt-10 " >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start lg:items-center text-center ">
        <div className="text-left flex flex-col gap-4  sm:w-[45%]  items-center">
          <h2 className="text-4xl font-bold text-white">FIGURES AND FACTS</h2>
          <p className="mt-4 text-lg leading-relaxed max-w-3xl text-gray-300">
            NinjaGame is not just a software provider; we are your strategic
            partner in the ever-evolving iGaming world. Our offerings include
            premium content, world-class igaming software, and innovative tools
            that cater to businesses across the iGaming spectrum, regardless of
            their size or scope.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-12 lg:mt-0 items-center justify-center  m-auto text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:bg-gray-700 transition-colors duration-300 justify-center "
            >
              <p className="text-4xl font-bold mb-2 text-purple-400">{stat.value}</p>
              <p className="text-xl font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiguresAndFacts;
