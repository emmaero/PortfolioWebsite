// project files
import sectionInfo from "../contents/section.json";
import projects from "../contents/projects.json";
import Card from "../components/Card";
import Modal from "../components/Modal";

export default function Portfolio({ setModal }) {
  const cards = projects.map((item) => (
    <Card
      key={item.id}
      item={item}
      onClick={() =>
        setModal(<Modal item={item.project} setModal={setModal} />)
      }
    />
  ));
  return (
    <section className="section-layout-container" id="portfolio">
      <div className="section-layout">
        <h2>{sectionInfo.project.title}</h2>
        <div className="section-description">
          <p>{sectionInfo.project.description}</p>
        </div>
        <div className="section-content">{cards}</div>
      </div>
    </section>
  );
}
