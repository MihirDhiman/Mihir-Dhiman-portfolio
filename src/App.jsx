import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
