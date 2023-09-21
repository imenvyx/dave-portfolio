import React from "react";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <div className="h-auto  max-h-900px flex flex-col my-80 items-center   max-w-[70%] mx-auto">
      <h1 className="font-bold text-7xl sm:text-9xl flex gap-3 text-[#220B38] mb-8 text-center">
        Hola.Soy Dave.
      </h1>

      <div className="text-3xl sm:text-7xl text-[#4B5555] mb-8 text-center">
        Un Desarrollador Frontend.
      </div>
      <div className="rounded-[64px] bg-white/30 backdrop-blur-lg backdrop-saturate-150  inline-flex gap-5 py-3 px-6 justify-center mx-auto">
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
        >
          <Icon
            icon="bi:linkedin"
            color="#0077b1"
            height="1.5rem"
            width="1.5rem"
          />
        </a>
        <a href="mailto:imdj9003@gmail.com">
          <Icon icon="mdi:email-outline" height="1.5rem" width="1.5rem" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
