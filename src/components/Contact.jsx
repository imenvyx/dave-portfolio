import React from "react";
import { Icon } from "@iconify/react";
import laptop from "../assets/images/msg.png";
const Contact = () => {
  return (
    <div id="contact-me" className="flex  pb-8 mt-20 ">
      <div className="flex mb-20 w-[95%] mx-auto items-center  ">
        <div className="flex flex-[1_1_60%]  p-16   ">
          <div className="rounded-[64px] py-[4rem] px-[4rem]  bg-[#8095FF]/70 backdrop-blur-lg backdrop-saturate-150 shadow-2xl ">
            <div className="flex max-w-[600px] flex-col  ">
              <h2 className="text-7xl font-bold text-[#220B38] mb-8">
                {" "}
                Hablemos de tu proyecto.
              </h2>
              <p className="text-lg text-[#4B5555] mb-8">
                Estoy emocionado por las oportunidades futuras y ansioso por
                contribuir a proyectos web innovadores. ¡Hablemos y descubramos
                cómo puedo ayudar a llevar tus ideas a la vida!
              </p>
              <h3 className="text-5xl font-bold text-[#220B38] mb-8">
                {" "}
                Trabajemos juntos
              </h3>
              <div className="rounded-[64px] bg-white/30 backdrop-blur-lg backdrop-saturate-150  inline-flex gap-5 p-4 w-52 justify-center ">
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
                  <Icon
                    icon="mdi:email-outline"
                    height="1.5rem"
                    width="1.5rem"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_1_40%] h-[650px] ">
          <img
            src={laptop}
            alt=""
            className=" h-full"
            style={{ filter: "drop-shadow(gray 0.5rem 0.5rem 10px)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
