import React from "react";
import { Icon } from "@iconify/react";
import Programer from "../assets/images/programer.png";

import { email } from "../assets/images/email";
const Hero = () => {
  return (
    <div className="h-screen  max-h-900px  flex items-center max-w-[80%] mx-auto">
      <img
        src={Programer}
        alt=""
        className=" h-[500px] w-[500px]"
        style={{ filter: "drop-shadow(gray 0.5rem 0.5rem 10px)" }}
      />
      <div className="flex flex-col  mx-auto">
        <h1
          style={{
            filter: "drop-shadow(5px 3px 5px rgba(0, 0, 0, 0.30))",
          }}
          className="font-bold text-7xl sm:text-6xl flex gap-3 text-[#B75BB8] mb-4 text-center"
        >
          Hola soy <span className="text-[#007CD5]"> Dave</span>
        </h1>
        <div
           style={{
            filter: "drop-shadow(5px 3px 5px rgba(0, 0, 0, 0.30))",
          }}
          className="text-3xl sm:text-9xl text-[#F1652A] mb-8 font-bold "
        >
          Desarrollador Frontend
        </div>
      </div>
    </div>
  );
};

export default Hero;
