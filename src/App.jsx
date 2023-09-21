import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

import "@fontsource-variable/nunito";

function App() {
  return (
    <div className=" h-full bg-gradient-to-t from-[#e0c3fc_0%] to-[#8ec5fc_100%]">
      <Navbar />
      <Hero />
      <Works />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
