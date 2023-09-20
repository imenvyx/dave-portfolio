import React from "react";
import { Icon } from "@iconify/react";
const icons = [
  <Icon icon="devicon:github" color="#3ac9bf" height="1.5rem" width="1.5rem" />,
  <Icon icon="bi:linkedin" color="#0077b1" height="1.5rem" width="1.5rem" />,
  <Icon icon="mdi:email-outline" height="1.5rem" width="1.5rem" />,
];
const Contact = () => {
  return (
    <div className="flex flex-col items-center pb-8 mt-20">
      <div className="flex flex-col items-center mb-20 max-w-4xl mx-auto text-center">
        <h2 className="text-7xl font-bold text-yellow-50"> Hablemos de tu proyecto.</h2>
        <p className="text-lg text-yellow-50">
          Estoy emocionado por las oportunidades futuras y ansioso por
          contribuir a proyectos web innovadores. ¡Hablemos y descubramos cómo
          puedo ayudar a llevar tus ideas en línea a la vida!
        </p>
      </div>
      <div className="rounded-[64px] bg-white/30 backdrop-blur-lg backdrop-saturate-150  inline-flex gap-5 p-4 justify-center mx-auto">
        {icons.map((i) => (
          <div className="">{i}</div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
