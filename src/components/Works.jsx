import React from "react";

const Works = () => {
  return (
    <div>
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-7xl font-bold text-yellow-50">
          Mi trabajos recientes
        </h2>
        <p className="text-lg text-yellow-50 mt-6 ">
          Aquí hay algunos proyectos anteriores en los que he trabajado.
          ¿Quieres ver más? Envíeme un correo electrónico.
        </p>
      </div>
      {/* Grid de los proyectos */}
      <div className="grid grid-cols-8 gap-5 max-w-[1200px] mx-auto">
        <div className="col-span-3 max-h-[550px] h-[400px] rounded-[64px] bg-slate-400"></div>
        <div className=" col-span-5 max-h-[550px] h-[400px] rounded-[64px] bg-red-400"></div>
        <div className=" col-span-5 max-h-[550px] h-[400px] rounded-[64px] bg-red-400"></div>
        <div className="col-span-3 max-h-[550px] h-[400px] rounded-[64px] bg-slate-400"></div>
      </div>
    </div>
  );
};

export default Works;
