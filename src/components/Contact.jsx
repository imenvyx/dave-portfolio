import React from "react";
import { Icon } from "@iconify/react";
import laptop from "../assets/images/msg.png";
const Contact = () => {
  return (
    <div id="contact-me" className="flex  pb-8 mt-20 ">
      <div className="grid grid-cols-7 mb-20 w-[95%] mx-auto items-center  ">
        <div className="col-start-1 col-span-5  row-start-1 p-16">
          <div
            style={{
              filter: "blur(20px)",
              filter: "drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.10))",
            }}
            className="flex flex-col rounded-[64px] py-[4rem] px-[4rem]  bg-[#F9F871]/70 "
          >
            <div className="flex max-w-[600px] flex-col  ">
              <h2 className="text-8xl font-bold text-[#ff5533fb] mb-8 ">
                {" "}
                Hablemos de tu proyecto
              </h2>
              <p className="text-lg text-[#2f2f2f] mb-8">
                Estoy emocionado por las oportunidades futuras y ansioso por
                contribuir a proyectos web innovadores. ¡Hablemos y descubramos
                cómo puedo ayudar a llevar tus ideas a la vida!
              </p>
              <h3 className="text-5xl font-bold text-[#0C7AC8]  mb-8">
                {" "}
                Trabajemos juntos
              </h3>
              <div className="inline-flex gap-5  w-52 justify-center ">
                <a
                  href="https://github.com/imenvyx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="simple-icons:github"
                    color="#2F4858"
                    height="3.5rem"
                    width="3.5rem"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/david-de-jes%C3%BAs-mart%C3%ADnez-mayeta/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="bi:linkedin"
                    color="#2F4858"
                    height="3.5rem"
                    width="3.5rem"
                  />
                </a>
                <a href="mailto:imdj9003@gmail.com">
                  <Icon
                    icon="mdi:email-outline"
                    color="#2F4858"
                    height="3.8rem"
                    width="3.8rem"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-4 col-span-4 row-start-1 h-[400px] w-full ">
          <img
            src={laptop}
            alt=""
            className="levitate h-full w-full"
            style={{ filter: "drop-shadow(gray 0.5rem 0.5rem 10px)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
