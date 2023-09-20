import React from "react";
import Dave from "../assets/images/unnamed.png";

const AboutMe = () => {
  return (
    <div className="mt-40">
      <h2 className="text-7xl font-bold text-yellow-50 text-center">
        ¿Quién es Dave?
      </h2>
      <div className="flex gap-20  items-center ">
        <div className="flex flex-col flex-[40%]">
          <p className="text-lg  text-yellow-50">
            David de Jesús Martínez Mayeta, un apasionado desarrollador Frontend
            con 2 años de experiencia en el emocionante mundo del desarrollo
            web. Mi enfoque esencial es proporcionar soluciones web que no solo
            sean visualmente impresionantes, sino que también cumplan con altos
            estándares de usabilidad y rendimiento. Creo firmemente en el poder
            de las habilidades blandas para enriquecer la colaboración y la
            comunicación en equipos de desarrollo. Mi capacidad para adaptarme
            rápidamente a nuevos desafíos, mi atención meticulosa a los detalles
            y mi deseo de aprendizaje continuo son cualidades que me han
            permitido crecer y destacar en mi carrera.
          </p>
        </div>
        <div className="flex flex-col">
          <figure className=" rounded-full overflow-hidden h-80 w-80">
            <img src={Dave} alt="Im Dave" className="h-full w-full" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
