export default function Card({ item, onClick }) {
  return (
    <>
      <button disabled={!item.isDone} onClick={onClick} className="card">
        <div className="thumbnail">
          <img
            src={require("../assets/thumbnails/" + item.thumbnail).default}
            alt=""
          />
          {item.isDone === true ? (
            ""
          ) : (
            <div className="thumbnail-overlay">
              <span>COMMING SOON</span>
            </div>
          )}
        </div>
        <div className="title">
          <h3>{item.project.title}</h3>
        </div>
      </button>
    </>
  );
}
