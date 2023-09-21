import { useRef, useLayoutEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

export default function Navbar() {
  return (
    <header className="pt-5">
      <nav className=" fixed z-40  w-full  " aria-label="Navbar Dave Portfolio">
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
          </Popover.Group>
        </div>
      </nav>
    </header>
  );
}
