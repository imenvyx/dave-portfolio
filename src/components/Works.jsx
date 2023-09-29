import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import projectsImg from "../assets/images/projects.png";
const projects = [
  {
    title: "Descubre Trinidad",
    color: "bg-[#ead926]/80",
    hcolor: "hover:bg-[#ead926]",
    description:
      "Creación del portal web de la Ciudad de Trinidad, Cuba. Como parte de un conjunto de herramientas de city branding.",
    technologies: [
      { icon: "ri:reactjs-fill", color: "#2f2f2f" },
      { icon: "simple-icons:html5", color: "#2f2f2f" },
      { icon: "simple-icons:css3", color: "#2f2f2f" },
      { icon: "nonicons:javascript-16", color: "#2f2f2f" },
      { icon: "devicon-plain:materialui", color: "#2f2f2f" },
      { icon: "simple-icons:greensock", color: "#2f2f2f" },
    ],
  },
  {
    title: " Xtarter App",
    color: "bg-[#30C0D0]/80",
    hcolor: "hover:bg-[#30C0ea]",
    description:
      "Creación de una innovadora plataforma de lanzamiento de proyectos que se financian mediante criptomonedas.",
    technologies: [
      { icon: "teenyicons:nextjs-outline", color: "#2f2f2f" },
      { icon: "simple-icons:html5", color: "#2f2f2f" },
      { icon: "simple-icons:css3", color: "#2f2f2f" },
      { icon: "nonicons:javascript-16", color: "#2f2f2f" },
      { icon: "nonicons:typescript-16", color: "#2f2f2f" },
      { icon: "simple-icons:tailwindcss", color: "#2f2f2f" },
      { icon: "simple-icons:chakraui", color: "#2f2f2f" },
    ],
  },
  {
    title: "Xtarter Dashboard",
    color: "bg-[#CF3648]/75",
    hcolor: "hover:bg-[#CF3656]/90",
    description:
      "Administrar la información de los proyectos y proporcionar un conjunto de métricas relevantes relacionadas con los mismos.",
    technologies: [
      { icon: "teenyicons:nextjs-outline", color: "#2f2f2f" },
      { icon: "simple-icons:html5", color: "#2f2f2f" },
      { icon: "simple-icons:css3", color: "#2f2f2f" },
      { icon: "nonicons:javascript-16", color: "#2f2f2f" },
      { icon: "nonicons:typescript-16", color: "#2f2f2f" },
      { icon: "simple-icons:tailwindcss", color: "#2f2f2f" },
      { icon: "simple-icons:chakraui", color: "#2f2f2f" },
    ],
  },
];

const container = {
  offscreen: {
    opacity: 1,
    scale: 0,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
  },
};
const Works = () => {
  return (
    <div id="works" className="">
      <div
        style={{
          filter: "blur(20px)",
          filter: "drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.30))",
        }}
        className="flex flex-col rounded-[64px]  p-16 max-w-[95%] bg-[#3455DB]/20  mx-auto"
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-9xl font-bold text-[#2C1092]">Mis trabajos</h2>
            {/*  <p className="text-xl text-[#4B5555] mt-6 ">
              Aquí hay algunos proyectos en los que he trabajado.
            </p> */}
          </div>
          <div className="absolute right-[150px] -top-20">
            <img
              src={projectsImg}
              alt=""
              className="h-[300px]"
              style={{ filter: "drop-shadow(gray 0.5rem 0.5rem 10px)" }}
            />
          </div>
        </div>
        <div className=" top-20 grid grid-cols-9  lg:gap-14 ">
          {projects.map((proj, index) => (
            <motion.a
              key={`project-${index}`}
              className={`project1 cursor-pointer col-span-8 md:col-span-4 lg:col-span-3 max-h-[600px] h-[400px] lg:h-[500px] ${proj.color} xl:h-[600px] rounded-[64px]  backdrop-blur-lg backdrop-saturate-150 shadow-2xl  ${proj.hcolor} ease-out hover:scale-110`}
              href="https://descubretrinidad.com/"
              target="_blank"
              rel="noopener noreferrer"
              variants={container}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div
                variants={item}
                className=" px-[3rem] lg:px-[3rem] xl:px-[6rem] flex gap-8 flex-col mt-[18%]  content-center items-center h-full"
              >
                <h3 className="text-4xl lg:text-5xl xl:text-7xl text-center font-bold text-[#2f2f2f]">
                  {proj.title}
                </h3>
                <p className="text-md lg:text-lg xl:text-xl text-[#2f2f2f]/75 text-center">
                  {proj.description}
                </p>
                <div className="flex  gap-4  flex-wrap justify-center">
                  {proj?.technologies?.map((tech) => (
                    <Icon
                      key={`${proj.title}-${tech.icon}`}
                      icon={tech.icon}
                      color={"#2f2f2f"}
                      height="40"
                      width="40"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
