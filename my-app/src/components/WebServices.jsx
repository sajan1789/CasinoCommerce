import React from "react";
import { Meteors } from "./ui/meteors";
const webServices=[
    {
      title:"Website Designing Services",
      desc:"Establish your business idea with an attractive user interface. Access your success through a website.",
      buttonText:""
    },
    {
        title:"App Development Services",
        desc:"Acquire your dream with flexible mobile apps. Get any Application development service with the best experience.",
        buttonText:""
      },
      {
        title:"Website Maintenance services",
        desc:"Get a stable website running at a low price. Choose Astream website maintenance services."
      },
      {
        title:"Hosting Services",
        desc:"Host your website with 100% boosting. Never stay slowed with Astream hosting services."
      },
      {
        title:"E-Commerce Services",
        desc:"Get every type of Ecommerce solution from Astream. Give your ideas a new direction."
      },
      {
        title:"Website Maintenance services",
        desc:"Get a stable website running at a low price. Choose Astream website maintenance services."
      },
      {
        title:"Website Maintenance services",
        desc:"Get a stable website running at a low price. Choose Astream website maintenance services."
      },
      {
        title:"Website Maintenance services",
        desc:"Get a stable website running at a low price. Choose Astream website maintenance services."
      },
      
      

]
function WebServices() {
    return (
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
        {webServices.map((item, index) => (
          <div key={index} className="w-full relative max-w-xs mx-auto">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl flex" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                {item.title}&apos;
              </h1>
              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                {item.desc}
              </p>
              <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 cursor-pointer">
                SERVICE DETAILS
              </button>
              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  export default WebServices;
  