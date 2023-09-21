import React from "react";
import { Icon } from "@iconify/react";
const icons = [
  <Icon icon="devicon:html5" height="3rem" width="3rem" />,
  <Icon icon="devicon:css3" height="3rem" width="3rem" />,
  <Icon icon="skill-icons:javascript" height="3rem" width="3rem" />,
  <Icon icon="logos:react" height="3rem" width="3rem" />,
  <Icon icon="devicon:tailwindcss" height="3rem" width="3rem" />,
  <Icon icon="logos:material-ui" height="3rem" width="3rem" />,
  <Icon
    icon="simple-icons:chakraui"
    color="#3ac9bf"
    height="3rem"
    width="3rem"
  />,
  <Icon
    icon="logos:typescript-icon"
    color="#3ac9bf"
    height="3rem"
    width="3rem"
  />,
  <Icon icon="devicon:nextjs" color="#3ac9bf" height="3rem" width="3rem" />,
  <Icon
    icon="logos:greensock-icon"
    color="#3ac9bf"
    height="3rem"
    width="3rem"
  />,
];

const Skills = () => {
  return (
    <div className="my-20 flex gap-20">
      <div className="flex flex-col mx-auto">
        <div className="flex my-8">
          <div className="text-4xl font-bold  mx-auto text-[#220B38]">
            Habilidades
          </div>
        </div>
        <div className="rounded-[64px] bg-[#2f2f2f]/40 backdrop-blur-lg backdrop-saturate-150 w-[90%] lg:w-[100%]  max-w-5xl   flex flex-wrap gap-5 ld:gap-10 py-8 px-10 lg:px-20 justify-center mx-auto">
          {icons.map((i, index) => (
            <div key={index}>{i}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
