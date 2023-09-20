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
  <Icon icon="logos:nextjs" color="#3ac9bf" height="3rem" width="3rem" />,
  <Icon
    icon="logos:greensock-icon"
    color="#3ac9bf"
    height="3rem"
    width="3rem"
  />,
];

const Skills = () => {
  return (
    <div className="mb-8 flex gap-20">
      <div className="flex flex-col mx-auto">
        <div className="flex my-8">
          <div className="text-4xl font-bold  mx-auto text-yellow-50">
            Skills
          </div>
        </div>
        <div className="rounded-[64px] bg-white/30 backdrop-blur-lg backdrop-saturate-150  flex flex-wrap gap-5 p-8 justify-center mx-auto">
          {icons.map((i) => (
            <div className="">{i}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
