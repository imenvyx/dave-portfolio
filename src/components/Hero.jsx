import React from "react";
import { Icon } from "@iconify/react";
import Programer from "../assets/images/programer.png";

import { email } from "../assets/images/email";
const Hero = () => {
  return (
    <div className="h-auto  max-h-900px  mt-40 mb-40 flex flex-col items-center">
      <div className="flex flex-col items-center max-w-[70%] mx-auto">
        <h1 className="font-bold text-7xl sm:text-9xl flex gap-3 text-[#994E9E] mb-8 text-center">
          Hola soy <span className="text-[#ff5533fb]">{" "}Dave</span>
        </h1>
        <div className="text-3xl sm:text-6xl text-[#0C7AC8] mb-8 text-center">
          Un Desarrollador Frontend.
        </div>
        {/*   <div className="rounded-[64px] border-2 border-[#FF5533]/50 bg-[#FFFDA3]/80 backdrop-blur-lg backdrop-saturate-150  inline-flex gap-5 py-3 px-6 justify-center mx-auto">
          <a
            href="https://github.com/imenvyx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="devicon:github"
              color="#3ac9bf"
              height="1.5rem"
              width="1.5rem"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/david-de-jes%C3%BAs-mart%C3%ADnez-mayeta/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[1.5rem] w-[1.5rem]"
          >
            <Icon
              icon="bi:linkedin"
              color="#0077b1"
              height="1.5rem"
              width="1.5rem"
            />
          </a>
          <a
            href="mailto:imdj9003@gmail.com"
            className="h-[1.5rem] w-[1.5rem] "
          >
            <Icon
              icon="material-symbols:mail"
              height="1.5rem"
              width="1.5rem"
              alt="email icon"
            />
          </a>
        </div> */}
      </div>
      <img
        src={Programer}
        alt=""
        className=" h-[600px] w-[600px]"
        style={{ filter: "drop-shadow(gray 0.5rem 0.5rem 10px)" }}
      />
    </div>
  );
};

export default Hero;
