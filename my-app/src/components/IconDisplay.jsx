import React from "react";
import { FaAws, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiWasmer,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const icons = [
  { component: <FaReact size={50} />, name: "React" },
  { component: <DiMongodb size={50} />, name: "MongoDB" },
  { component: <FaAws size={50} />, name: "AWS" },
  { component: <SiTailwindcss size={50} />, name: "Tailwind CSS" },
  { component: <SiNextdotjs size={50} />, name: "Next.js" },
  { component: <SiTypescript size={50} />, name: "TypeScript" },
  { component: <SiHtml5 size={50} />, name: "HTML" },
  { component: <SiCss3 size={50} />, name: "CSS" },
  { component: <SiJavascript size={50} />, name: "JavaScript" },
  { component: <SiWasmer size={50} />, name: "Wasm" },
];

const IconDisplay = () => {
  return (
    <div className=" flex flex-col gap-[55px] mt-20 ">
      <h2 className=" text-4xl text-center px-[40px]">
        Technologies that we majorly use
      </h2>
      <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center items-center  w-[90%] m-auto">
        {icons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center  ">
            {icon.component}
            <span className="mt-2 text-white text-sm sm:text-base md:text-lg lg:text-xl">
              {icon.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconDisplay;
