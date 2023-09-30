import React from "react";
import { Icon } from "@iconify/react";

const styles = {
  filter: "blur(20px)",
  filter: "drop-shadow(5px 3px 5px rgba(0, 0, 0, 0.30))",
  backgroundImage: "linear-gradient( 135deg, #FF7AF5 10%, #513162 100%)",
};
const icons = [
  {
    icon: (
      <div style={styles} className={`rounded-full p-4`}>
        <Icon icon="devicon:html5" height="2.5rem" width="2.5rem" />
      </div>
    ),
  },
  {
    icon: (
      <div style={styles} className={`rounded-full p-4`}>
        <Icon icon="devicon:css3" height="2.5rem" width="2.5rem" />
      </div>
    ),
  },
  {
    icon: (
      <div style={styles} className={`rounded-full p-4`}>
        <Icon icon="skill-icons:javascript" height="2.5rem" width="2.5rem" />
      </div>
    ),
  },
  {
    icon: (
      <div style={styles} className={`rounded-full p-4`}>
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
      <div style={styles} className={`rounded-full p-4`}>
        <Icon icon="logos:react" height="2.5rem" width="2.5rem" />
      </div>
    ),
  },
  {
    icon: (
      <div style={styles} className={`rounded-full p-4`}>
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
      <div style={styles} className={`rounded-full p-4`}>
        <Icon icon="devicon:tailwindcss" height="2.5rem" width="2.5rem" />
      </div>
    ),
  },
  {
    icon: (
      <div style={styles} className={`rounded-full p-4`}>
        <Icon icon="logos:material-ui" height="2.5rem" width="2.5rem" />
      </div>
    ),
  },
  {
    icon: (
      <div style={styles} className={`rounded-full p-4`}>
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
      <div style={styles} className={`rounded-full p-4`}>
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
    <div className=" col-span-10">
      <div className="flex flex-wrap  py-4   justify-center">
        {icons?.map((i, index) => (
          <div key={`tecnologys${index}`} className={`rounded-full  p-4`}>
            {i?.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
