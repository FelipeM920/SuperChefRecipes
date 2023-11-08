import "./style.scss";
import ImageHolder from "../../atoms/image-holder";

export default function RecipeImageWithTitle() {
  return (
    <section className="recipe-image-title">
      <ImageHolder></ImageHolder>
      <div className="title">
        <span>Colored Macarons</span>
      </div>
    </section>
  );
}