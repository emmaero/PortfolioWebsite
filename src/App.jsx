import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import SectionLayout from "./components/Layout/SectionLayout";
import Picture from "./components/Picture";
import title from "./contents/title.json";
import "./css/style.css";

function App() {
  const aboutDescription = `Hi! I’m Emmanuel, a junior frontend developer. This is my website, which I use to showcase everything I developer.
    I specialize in Vue.js and React development with TypeScript with a minimalist design and attention to detail. Why do I need minimalistic design and attention to detail, you might ask? Well, scroll down and let me convince you.`;
  const projectsDescription = `Here are projects have done some and some upcoming projects I will be doing during the Frontend course at Novare Potential.`;
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <SectionLayout id="about" title={title.about} text={aboutDescription}>
        <Picture />
      </SectionLayout>
      <SectionLayout id="project" title={title.project} text={projectsDescription}>
      </SectionLayout>
    </div>
  );
}

export default App;
