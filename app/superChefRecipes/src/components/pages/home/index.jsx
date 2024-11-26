import "./style.scss";
import { useLoaderData } from "react-router-dom";
import RecipeCardMain from "../../UI/organisms/recipe-card-main";
import ShowCaseThreeItens from "../../UI/organisms/show-case-three-itens";

export default function Home() {
  const { recipes } = useLoaderData();
  return (
    <section className="home">
      <RecipeCardMain recipe={recipes[2]} />
      <ShowCaseThreeItens title='Super Delicious' recipes={recipes.slice(0, 3)} />
      <ShowCaseThreeItens title='Sweet Tooth' recipes={recipes.slice(4, 7)} />
    </section>
  );
}
