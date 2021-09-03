import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import SectionLayout from "./components/Layout/SectionLayout";
import Picture from "./components/Picture";
import Card from "./components/Card";
import projects from "./contents/projects.json";
import techologies from "./contents/technologies.json";
import title from "./contents/title.json";
import Technology from "./components/Technology";
import List from "./components/List";
import "./css/style.css";

function App() {
  const aboutDescription = `Hi! I’m Emmanuel, a junior frontend developer. This is my website, which I use to showcase everything I developer.
    I specialize in Vue.js and React development with TypeScript with a minimalist design and attention to detail. Why do I need minimalistic design and attention to detail, you might ask? Well, scroll down and let me convince you.`;
  const projectsDescription = `Here are projects have done some and some upcoming projects I will be doing during the Frontend course at Novare Potential.`;
  const techDescription = `Here is the techology that I already know and also starting to learn.`;
  //Maximum number of technology allow in technologies
  const filterTechnologies = techologies.slice(0, 15);

  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <SectionLayout id="about" title={title.about} text={aboutDescription}>
        <Picture />
      </SectionLayout>
      <SectionLayout
        id="portfolio"
        title={title.project}
        text={projectsDescription}
      >
        <List list={projects} LayoutComponent={Card} />
      </SectionLayout>
      <SectionLayout id="tech" title={title.tech} text={techDescription}>
        <List list={filterTechnologies} LayoutComponent={Technology} />
      </SectionLayout>
      <SectionLayout id="contacts" title={title.contact} text={techDescription}>
        <ul>
          <li>
            <a>imhontu.emmanuel@yahoo.com</a>
          </li>
          <li>
            <a href="tel:+46709641118">+46709641118</a>
          </li>
          <li>
            <a href="">Halmstad, Sweden</a>
          </li>
        </ul>
      </SectionLayout>
    </div>
  );
}

export default App;
