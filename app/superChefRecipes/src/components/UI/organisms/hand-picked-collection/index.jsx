import "./style.scss";
import ImageHolder from "../../atoms/image-holder";

export default function HandPickedCollection() {
  return (
    <section className="handPickedCollection">
      <h2 className="title">Hand-Picked Collections</h2>
      <div className="cardsContainer">
        <div className="card">
          <ImageHolder />
          <span className="cardLabel">Lorem ipsum dolor sit</span>
        </div>
        <div className="card">
          <ImageHolder />
          <span className="cardLabel">Lorem ipsum dolor sit</span>
        </div>
        <div className="card">
          <ImageHolder />
          <span className="cardLabel">Lorem ipsum dolor sit</span>
        </div>
        <div className="card">
          <ImageHolder />
          <span className="cardLabel">Lorem ipsum dolor sit</span>
        </div>
        <div className="card">
          <ImageHolder />
          <span className="cardLabel">Lorem ipsum dolor sit</span>
        </div>
        <div className="card">
          <ImageHolder />
          <span className="cardLabel">Lorem ipsum dolor sit</span>
        </div>
      </div>
    </section>
  );
}
