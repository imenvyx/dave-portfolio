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
      className=" h-full bg-gradient-to-r from-[#6a11cb_0%] to-[#2575fc_100%]"
      /* style={{
        backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
        background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
        background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
      }} */
    >
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <Works />
        <AboutMe />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
