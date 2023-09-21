import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

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
    <div id="works" className="!relative ">
      <div className="flex flex-col items-center mb-20 text-center">
        <h2 className="text-7xl font-bold text-[#220B38]">Mis trabajos</h2>
        <p className="text-lg text-[#4B5555] mt-6 ">
          Aquí hay algunos proyectos en los que he trabajado.
        </p>
      </div>
      {/* Grid de los proyectos */}
      <div className=" top-20 grid grid-cols-8 gap-8 lg:gap-14 max-w-[90%] mx-auto">
        <motion.div
          className="project1 col-span-8  md:col-span-4 lg:col-span-5 max-h-[600px] h-[400px] lg:h-[500px] xl:h-[600px] rounded-md overflow-hidden object-fill hover:shadow-2xl transition-shadow ease-out  "
          variants={container}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={item} className="h-full w-full">
            <img
              src="https://ik.imagekit.io/z2dpj2vxe/Captura%20de%20pantalla%202023-09-20%20a%20la(s)%202.30.05%20a.m..png?updatedAt=1695191636858&tr=w-1180%2Ch-666%2Cfo-auto"
              alt="Web Descubre Trinidad"
              className="h-full w-full"
            />
          </motion.div>
        </motion.div>

        <motion.a
          className="project1 cursor-pointer col-span-8 md:col-span-4 lg:col-span-3 max-h-[600px] h-[400px] lg:h-[500px] xl:h-[600px] rounded-[64px] bg-[#FDE3A7]/90 backdrop-blur-lg backdrop-saturate-150 hover:shadow-xl hover:bg-[#FDE3A7] transition-shadow ease-out "
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
            className=" px-[3rem] lg:px-[3rem] xl:px-[6rem] flex gap-8 flex-col justify-center items-center h-full"
          >
            <h3 className="text-4xl lg:text-5xl xl:text-7xl text-center font-bold text-[#220B38]">
              Descubre Trinidad
            </h3>
            <p className="text-md lg:text-lg xl:text-xl text-[#4B5555] text-center">
              Déjate enamorar por el encanto de una ciudad de más de cinco
              siglos.
            </p>
            <div className="flex  gap-4  flex-wrap justify-center">
              <Icon
                icon="ri:reactjs-fill"
                color="#2f2f2f"
                height="40"
                width="40"
              />

              <Icon
                icon="simple-icons:html5"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="simple-icons:css3"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="nonicons:javascript-16"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="devicon-plain:materialui"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="simple-icons:greensock"
                color="#2f2f2f"
                height="40"
                width="40"
              />
            </div>
          </motion.div>
        </motion.a>

        {/* Project 2 */}
        <motion.a
          className="project2 cursor-pointer col-span-8 md:col-span-4 lg:col-span-3 max-h-[600px] h-[400px] lg:h-[500px] xl:h-[600px] rounded-[64px] bg-[#C9F227]/75 backdrop-blur-lg backdrop-saturate-150 hover:shadow-xl hover:bg-[#C9F227] transition-shadow ease-out "
          href="https://app-xtarter.devel.place/"
          target="_blank"
          rel="noopener noreferrer"
          variants={container}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            variants={item}
            className=" px-[3rem] lg:px-[3rem] xl:px-[6rem] flex gap-8 flex-col justify-center items-center h-full"
          >
            <h3 className="text-4xl lg:text-5xl xl:text-7xl text-center font-bold text-[#220B38]">
              Xtarter App
            </h3>
            <p className="text-md lg:text-lg xl:text-xl text-[#4B5555] text-center">
              Innovadora plataforma de lanzamiento de proyectos que se financian
              mediante criptomonedas.
            </p>
            <div className="flex gap-4  flex-wrap justify-center">
              <Icon
                icon="teenyicons:nextjs-outline"
                color="#2f2f2f"
                height="40"
                width="40"
              />

              <Icon
                icon="simple-icons:html5"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="simple-icons:css3"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="nonicons:javascript-16"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="nonicons:typescript-16"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="simple-icons:tailwindcss"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="simple-icons:chakraui"
                color="#2f2f2f"
                height="40"
                width="40"
              />
            </div>
          </motion.div>
        </motion.a>
        <motion.div
          className="project2 col-span-8  md:col-span-4 lg:col-span-5 max-h-[600px] h-[400px] lg:h-[500px] xl:h-[600px] rounded-md overflow-hidden object-cover hover:shadow-xl transition-shadow ease-out  "
          variants={container}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={item} className="h-full w-full">
            <img
              src="https://ik.imagekit.io/z2dpj2vxe/Captura%20de%20pantalla%202023-09-20%20a%20la(s)%202.32.16%20a.m..png?updatedAt=1695191610385&tr=w-1080%2Ch-566%2Cfo-auto"
              alt="Xtarter App"
              className="h-full w-full"
            />
          </motion.div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="project3 col-span-8  md:col-span-4 lg:col-span-5 max-h-[600px] h-[400px] lg:h-[500px] xl:h-[600px] rounded-md overflow-hidden object-fill hover:shadow-2xl transition-shadow ease-out  "
          variants={container}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={item} className="h-full w-full">
            <img
              src="https://ik.imagekit.io/z2dpj2vxe/Captura%20de%20pantalla%202023-09-20%20a%20la(s)%202.31.40%20a.m..png?updatedAt=1695191603863&tr=w-1080%2Ch-566%2Cfo-auto"
              alt="Xtarter Dashboard"
              className="h-full w-full"
            />
          </motion.div>
        </motion.div>
        <motion.a
          className="project3 cursor-pointer col-span-8 md:col-span-4 lg:col-span-3 max-h-[600px] h-[400px] lg:h-[500px] xl:h-[600px] rounded-[64px] bg-[#C8F7C5] bg-[#F1A9A0]/75 backdrop-blur-lg backdrop-saturate-150 hover:shadow-xl hover:bg-[#F1A9A0] transition-shadow ease-out "
          href="https://dash-xtarter.devel.place/"
          target="_blank"
          rel="noopener noreferrer"
          variants={container}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            variants={item}
            className=" px-[3rem] lg:px-[3rem] xl:px-[6rem] flex gap-8 flex-col justify-center items-center h-full"
          >
            <h3 className="text-4xl lg:text-5xl xl:text-7xl text-center font-bold text-[#220B38]">
              Xtarter Dashboard
            </h3>
            <p className="text-md lg:text-lg xl:text-xl  text-[#4B5555] text-center">
              Administrar la información de los proyectos y proporcionar un
              conjunto de métricas relevantes relacionadas con los mismos.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Icon
                icon="teenyicons:nextjs-outline"
                color="#2f2f2f"
                height="40"
                width="40"
              />

              <Icon
                icon="simple-icons:html5"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="simple-icons:css3"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="nonicons:javascript-16"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="nonicons:typescript-16"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="simple-icons:tailwindcss"
                color="#2f2f2f"
                height="40"
                width="40"
              />
              <Icon
                icon="simple-icons:chakraui"
                color="#2f2f2f"
                height="40"
                width="40"
              />
            </div>
          </motion.div>
        </motion.a>
      </div>
    </div>
  );
};

export default Works;
