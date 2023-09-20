import React from "react";
import { Icon } from "@iconify/react";
const icons = [
  <Icon icon="devicon:github" color="#3ac9bf" height="1.5rem" width="1.5rem" />,
  <Icon icon="bi:linkedin" color="#0077b1" height="1.5rem" width="1.5rem" />,
  <Icon icon="mdi:email-outline" height="1.5rem" width="1.5rem" />,
];
const Hero = () => {
  return (
    <div className=" h-auto flex flex-col my-60 items-center ">
      <h2 className=" text-9xl flex gap-3 text-[#220B38]">
        Hola. Soy<h1 className=" text-9xl text-[#220B38]"> Dave.</h1>
      </h2>

      <div className=" text-7xl text-[#4B5555] mb-8">Un Frontend Developer.</div>
      <div className="rounded-[64px] bg-white/30 backdrop-blur-lg backdrop-saturate-150  inline-flex gap-5 py-3 px-6 justify-center mx-auto">
        {icons.map((i) => (
          <div className="">{i}</div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
