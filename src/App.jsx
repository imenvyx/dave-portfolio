import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

import "@fontsource-variable/nunito";
/* bg-gradient-to-t from-[#e0c3fc_0%] to-[#8ec5fc_100%] */
function App() {
  return (
    <div
      className=" h-full  "
      style={{
        /* background: "rgb(45,117,150)",
        background:
          "linear-gradient(180deg, rgba(45,117,150,1) 0%, rgba(191,119,145,1) 48%, rgba(219,195,252,1) 99%)", */

        background:
          "linear-gradient(180deg, rgba(228,218,255,1) 0%, rgba(245,231,255,1) 50%, rgba(219,195,252,1) 99%)",
      }}
    >
      <Navbar />
      <Hero />
      <Works />
      <AboutMe />

      <Contact />
    </div>
  );
}

export default App;
