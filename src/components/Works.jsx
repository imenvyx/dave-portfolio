import React from "react";
import { Icon } from "@iconify/react";

const Works = () => {
  return (
    <div>
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-7xl font-bold text-[#220B38]">
          Mi trabajos recientes
        </h2>
        <p className="text-lg text-[#4B5555] mt-6 ">
          Aquí hay algunos proyectos anteriores en los que he trabajado.
        </p>
      </div>
      {/* Grid de los proyectos */}
      <div className="grid grid-cols-8 gap-5 max-w-[90%] mx-auto">
        <div className=" col-span-5 max-h-[450px] h-[450px] rounded-md overflow-hidden object-fill">
          <img
            src="https://ik.imagekit.io/z2dpj2vxe/Captura%20de%20pantalla%202023-09-20%20a%20la(s)%202.31.40%20a.m..png?updatedAt=1695191603863&tr=w-1080%2Ch-566%2Cfo-auto"
            alt="Xtarter Dashboard"
            className="h-full w-full"
          />
        </div>
        <div className="col-span-3 max-h-[450px] h-[450px] rounded-[64px] bg-[#C8F7C5] bg-[#F1A9A0]/75 backdrop-blur-lg backdrop-saturate-150">
          <div className=" px-16 flex flex-col justify-center items-center  h-full">
            <h3 className="text-5xl mb-3 text-center font-bold text-[#220B38]">
              Xtarter Dashboard
            </h3>
            <p className="text-lg mb-6 text-[#4B5555]">Todo en un lugar</p>
            <div className="flex mt-6 gap-4 max-w-[70%] flex-wrap justify-center">
              <Icon
                icon="devicon:nextjs"
                color="#3ac9bf"
                height="40"
                width="40"
              />
              <Icon
                icon="simple-icons:chakraui"
                color="#3ac9bf"
                height="40"
                width="40"
              />
              <Icon
                icon="logos:typescript-icon"
                color="#3ac9bf"
                height="40"
                width="40"
              />
              <Icon icon="devicon:tailwindcss" height="40" width="40" />
              <Icon icon="devicon:html5" height="40" width="40" />
              <Icon icon="devicon:css3" height="40" width="40" />
              <Icon icon="skill-icons:javascript" height="40" width="40" />
            </div>
          </div>
        </div>
        <div className="col-span-3 max-h-[450px] h-[450px] rounded-[64px] bg-[#F1A9A0] bg-[#C9F227]/75 backdrop-blur-lg backdrop-saturate-150">
          <div className="px-16 flex flex-col justify-center  items-center h-full">
            <h3 className="text-5xl mb-3 text-center font-bold text-[#220B38]">
              Xtarter App
            </h3>
            <p className="text-lg mb-6 text-[#4B5555]">
              Invierta temprano en los proyectos futuristas
            </p>
            <div className="flex mt-6 gap-4 max-w-[70%] flex-wrap justify-center">
              <Icon
                icon="devicon:nextjs"
                color="#3ac9bf"
                height="40"
                width="40"
              />
              <Icon
                icon="simple-icons:chakraui"
                color="#3ac9bf"
                height="40"
                width="40"
              />
              <Icon
                icon="logos:typescript-icon"
                color="#3ac9bf"
                height="40"
                width="40"
              />
              <Icon icon="devicon:tailwindcss" height="40" width="40" />
              <Icon icon="devicon:html5" height="40" width="40" />
              <Icon icon="devicon:css3" height="40" width="40" />
              <Icon icon="skill-icons:javascript" height="40" width="40" />
            </div>
          </div>
        </div>
        <div className=" col-start-4 col-span-5 max-h-[450px] h-[450px] rounded-md overflow-hidden object-cover">
          <img
            src="https://ik.imagekit.io/z2dpj2vxe/Captura%20de%20pantalla%202023-09-20%20a%20la(s)%202.32.16%20a.m..png?updatedAt=1695191610385&tr=w-1080%2Ch-566%2Cfo-auto"
            alt="Xtarter App"
            className="h-full w-full"
          />
        </div>

        <div className=" col-span-5 max-h-[450px] h-[450px] rounded-md overflow-hidden object-fill">
          <img
            src="https://ik.imagekit.io/z2dpj2vxe/Captura%20de%20pantalla%202023-09-20%20a%20la(s)%202.30.05%20a.m..png?updatedAt=1695191636858&tr=w-1180%2Ch-666%2Cfo-auto"
            alt="Web Descubre Trinidad"
            className="h-full w-full"
          />
        </div>
        <div className="col-span-3 max-h-[450px] h-[450px] rounded-[64px] bg-[#FDE3A7] backdrop-blur-lg backdrop-saturate-150 ">
          <div className=" px-16 flex flex-col justify-center items-center h-full">
            <h3 className="text-5xl mb-3 text-center font-bold text-[#220B38]">
              Descubre Trinidad
            </h3>
            <p className="text-lg mb-6 text-[#4B5555] text-center">
              Déjate enamorar por el encanto de una ciudad de más de cinco
              siglos.
            </p>
            <div className="flex mt-6., gap-4 max-w-[70%] flex-wrap justify-center">
              <Icon icon="logos:react" height="40" width="40" />
              <Icon icon="logos:material-ui" height="40" width="40" />
              <Icon
                icon="logos:greensock-icon"
                color="#3ac9bf"
                height="40"
                width="40"
              />
              <Icon icon="devicon:html5" height="40" width="40" />
              <Icon icon="devicon:css3" height="40" width="40" />
              <Icon icon="skill-icons:javascript" height="40" width="40" />
            </div>
          </div>
        </div>
        {/*  <div className="col-span-3 max-h-[550px] h-[400px] rounded-[64px] bg-slate-400"></div> */}
      </div>
    </div>
  );
};

export default Works;
