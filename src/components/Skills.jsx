import React from "react";
import { Icon } from "@iconify/react";
const icons = [
  {
    icon: (
      <div
        className={`rounded-full bg-[#60E4C7] backdrop-blur-lg backdrop-saturate-150 p-4 shadow-inner shadow-gray-500/50`}
      >
        <Icon icon="devicon:html5" height="2.5rem" width="2.5rem" />
      </div>
    ),
  },
  {
    icon: (
      <div
        className={`rounded-full bg-[#F0DB50] backdrop-blur-lg backdrop-saturate-150 p-4 shadow-inner  shadow-gray-500/50`}
      >
        <Icon icon="devicon:css3" height="2.5rem" width="2.5rem" />
      </div>
    ),
  },
  {
    icon: (
      <div
        className={`rounded-full bg-[#4554A4] backdrop-blur-lg backdrop-saturate-150 p-4 shadow-inner  shadow-gray-500/50 `}
      >
        <Icon icon="skill-icons:javascript" height="2.5rem" width="2.5rem" />
      </div>
    ),
  },
  {
    icon: (
      <div
        className={`rounded-full bg-[#FF722A]/70 backdrop-blur-lg backdrop-saturate-150 p-4 shadow-inner  shadow-gray-500/50`}
      >
        <Icon
          icon="logos:typescript-icon"
          color="#3ac9bf"
          height="2.5rem"
          width="2.5rem"
        />
      </div>
    ),
  },
  {
    icon: (
      <div
        className={`rounded-full bg-[#FF3E2A]/70 backdrop-blur-lg backdrop-saturate-150 p-4 shadow-inner  shadow-gray-500/50`}
      >
        <Icon icon="logos:react" height="2.5rem" width="2.5rem" />
      </div>
    ),
  },
  {
    icon: (
      <div
        className={`rounded-full bg-[#7F7E7E]/50 backdrop-blur-lg backdrop-saturate-150 p-4 shadow-inner  shadow-gray-500/50`}
      >
        <Icon
          icon="devicon:nextjs"
          color="#3ac9bf"
          height="2.5rem"
          width="2.5rem"
        />
      </div>
    ),
  },
  {
    icon: (
      <div
        className={`rounded-full bg-[#C673Ed] backdrop-blur-lg backdrop-saturate-150 p-4 shadow-inner  shadow-gray-500/50`}
      >
        <Icon icon="devicon:tailwindcss" height="2.5rem" width="2.5rem" />
      </div>
    ),
  },
  {
    icon: (
      <div
        className={`rounded-full bg-[#FF722A]/70 backdrop-blur-lg backdrop-saturate-150 p-4 shadow-inner  shadow-gray-500/50`}
      >
        <Icon icon="logos:material-ui" height="2.5rem" width="2.5rem" />
      </div>
    ),
  },
  {
    icon: (
      <div
        className={`rounded-full bg-[#FD4952]/70  backdrop-blur-lg backdrop-saturate-150 p-4 shadow-inner  shadow-gray-500/50`}
      >
        <Icon
          icon="simple-icons:chakraui"
          color="#3ac9bf"
          height="2.5rem"
          width="2.5rem"
        />
      </div>
    ),
  },

  {
    icon: (
      <div
        className={`rounded-full bg-[#3F9EE6] backdrop-blur-lg backdrop-saturate-150 p-4 shadow-inner  shadow-gray-500/50`}
      >
        <Icon
          icon="logos:greensock-icon"
          color="#3ac9bf"
          height="2.5rem"
          width="2.5rem"
        />
      </div>
    ),
  },
];

const Skills = () => {
  return (
    <div className=" col-span-8">
      <div className="flex flex-wrap  py-4 px-10 lg:px-20 justify-between mx-auto">
        {icons?.map((i, index) => (
          <div
            key={`tecnologys${index}`}
            className={`rounded-full bg-[${i?.color}] backdrop-blur-lg backdrop-saturate-150 p-4`}
          >
            {i?.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
