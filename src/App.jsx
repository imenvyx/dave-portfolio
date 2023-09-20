import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import "@fontsource-variable/nunito";

function App() {
  return (
    <div
      bg-gradient-to-t
      from-purple-200
      via-purple-400
      to-purple-800
      className=" h-full bg-gradient-to-t from-[#e0c3fc_0%] to-[#8ec5fc_100%]"
      /* style={{
        background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
        background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
      }} */
    >
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
