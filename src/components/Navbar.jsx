import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="pt-5">
      <nav
        className="mx-auto fixed  left-[37.5%] flex  items-center justify-center p-4 backdrop-blur-sm bg-white/30  rounded-[50px] gap-4   lg:px-8"
        aria-label="Navbar Dave Portfolio"
      >
        <div className="flex ">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Dave Portfolio</span>
          </a>
        </div>

        <Popover.Group className="flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Trabajos
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Acerca de Mí
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contacto
          </a>
        </Popover.Group>
      </nav>
    </header>
  );
}
