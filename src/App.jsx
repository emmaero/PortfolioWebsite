// The imports could be better organized
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import SectionLayout from "./components/SectionLayout";
import Picture from "./components/Picture";
import Card from "./components/Card";
import projects from "./contents/projects.json";
import techologies from "./contents/technologies.json";
import title from "./contents/title.json";
import Technology from "./components/Technology";
import List from "./components/List";
import Contact from "./components/Contact";
import PageFooter from "./components/PageFooter";

// scripts
import { description } from "./scripts/sectionDescriptions";
//css
import "./css/style.css";

function App() {
  const { aboutDescription, projectsDescription, techDescription } =
    description;
  //Maximum number of technology allow in technologies
  const filterTechnologies = techologies.slice(0, 15);

  return (
    <div className="App">
      <NavigationBar />
      <Hero />

      {/* I usually dont use comments in the code, but in this case is neccesary to make it easier to undrstand */}

      {/* About */}
      <SectionLayout id="about" title={title.about} text={aboutDescription}>
        <Picture />
      </SectionLayout>

      {/* Portoflio */}
      <SectionLayout
        id="portfolio"
        title={title.project}
        text={projectsDescription}
      >
        <List list={projects} LayoutComponent={Card} />
      </SectionLayout>

      {/* Tech */}
      <SectionLayout id="tech" title={title.tech} text={techDescription}>
        <List list={filterTechnologies} LayoutComponent={Technology} />
      </SectionLayout>

      {/* Contacts */}
      {/* Has the same text as tech. This does not reduce points, but fix it */}
      <SectionLayout id="contacts" title={title.contact} text={techDescription}>
        <Contact />
      </SectionLayout>
      <PageFooter />
    </div>
  );
}

export default App;
