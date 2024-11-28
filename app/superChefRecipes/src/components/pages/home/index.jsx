import "./style.scss";
import { useLoaderData } from "react-router-dom";
import RecipeCardMain from "../../UI/organisms/recipe-card-main";
import ShowCaseThreeItens from "../../UI/organisms/show-case-three-itens";
import PopularCategories from "../../UI/organisms/popular-categories";
import Newsletter from "../../UI/organisms/newsletter";
import HandPickedCollection from "../../UI/organisms/hand-picked-collection";

export default function Home() {
  const { recipes } = useLoaderData();
  return (
    <section className="home">
      <RecipeCardMain recipe={recipes[2]} />
      <ShowCaseThreeItens
        title="Super Delicious"
        recipes={recipes.slice(0, 3)}
      />
      <ShowCaseThreeItens title="Sweet Tooth" recipes={recipes.slice(4, 7)} />
      <PopularCategories />
      <Newsletter
        title="Deliciousness to your inbox"
        description="Enjoy weekly hand picked recipes and recommendations"
        inputPlaceHolder="Email Address"
        buttonLabel="Join"
        buttonColor="#FF642F"
        onClick={() => alert("You have joined our newsletter")}
      />
      <HandPickedCollection />
    </section>
  );
}
