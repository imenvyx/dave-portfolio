import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div id="contact-me" className="flex flex-col items-center pb-8 mt-20">
      <div className="flex flex-col items-center mb-20 w-[90%] max-w-4xl mx-auto text-center">
        <h2 className="text-7xl font-bold text-[#220B38] mb-8">
          {" "}
          Hablemos de tu proyecto.
        </h2>
        <p className="text-lg text-[#4B5555]">
          Estoy emocionado por las oportunidades futuras y ansioso por
          contribuir a proyectos web innovadores. ¡Hablemos y descubramos cómo
          puedo ayudar a llevar tus ideas a la vida!
        </p>
      </div>
      <div className="rounded-[64px] bg-white/30 backdrop-blur-lg backdrop-saturate-150  inline-flex gap-5 p-4 justify-center mx-auto">
        <a
          href="https://github.com/imenvyx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="devicon:github"
            color="#3ac9bf"
            height="1.5rem"
            width="1.5rem"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/david-de-jes%C3%BAs-mart%C3%ADnez-mayeta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="bi:linkedin"
            color="#0077b1"
            height="1.5rem"
            width="1.5rem"
          />
        </a>
        <a href="mailto:imdj9003@gmail.com">
          <Icon icon="mdi:email-outline" height="1.5rem" width="1.5rem" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
