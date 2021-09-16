//npm file
import { useState } from "react";
// project files
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Contact from "./sections/Contact";
import PageFooter from "./components/PageFooter";
import About from "./sections/About";
import Tech from "./sections/Tech";
import Portfolio from "./sections/Portfolio";
import ModalContainer from "./components/ ModalContainer";

//css
import "./css/style.css";

function App() {
  const [modal, setModal] = useState(null);
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Portfolio setModal={setModal} />
      <Tech />
      <Contact />
      <PageFooter />
      <ModalContainer modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;
