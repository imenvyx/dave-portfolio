import { Popover } from "@headlessui/react";
import { Icon } from "@iconify/react";
export default function Navbar() {
  return (
    <header className="pt-5">
      <nav className=" fixed z-40  w-full " aria-label="Navbar Dave Portfolio">
        <div className="mx-auto max-w-[500px] w-[90%] lg:w-[40%] flex  items-center justify-center p-4 backdrop-blur-sm bg-white/30  rounded-[50px] gap-4   lg:px-8">
          <div className="flex ">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Dave Portfolio</span>
            </a>
          </div>

          <Popover.Group className="flex gap-x-8 md:gap-x-12 items-center">
            <a
              href="#works"
              className=" text-md md:text-lg text-center font-semibold leading-6 text-[#220B38]"
            >
              Trabajos
            </a>
            <a
              href="#about-me"
              className="text-md md:text-lg text-center font-semibold leading-6 text-[#220B38]"
            >
              Acerca de Mí
            </a>
            <a
              href="#contact-me"
              className="text-md md:text-lg text-center font-semibold leading-6 text-[#220B38]"
            >
              Contacto
            </a>
            {/* <div className="flex gap-4 ">
              <a
                href="https://github.com/imenvyx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="simple-icons:github"
                  color="#220B38"
                  height="1.5rem"
                  width="1.5rem"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/david-de-jes%C3%BAs-mart%C3%ADnez-mayeta/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[1.5rem] w-[1.5rem]"
              >
                <Icon
                  icon="bi:linkedin"
                  color="#220B38"
                  height="1.5rem"
                  width="1.5rem"
                />
              </a>
              <a
                href="mailto:imdj9003@gmail.com"
                className="h-[1.5rem] w-[1.5rem] "
              >
                <Icon
                   icon="solar:letter-linear"
                   color="#220B38"
                  height="1.5rem"
                  width="1.5rem"
                  alt="email icon"
                />
              </a>
            </div> */}
          </Popover.Group>
        </div>
      </nav>
    </header>
  );
}
