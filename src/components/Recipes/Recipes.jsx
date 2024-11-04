import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    
    <div className="max-w-7xl mx-auto w-1/2 ">
      
      <h1 className="font-bold m-4">Total Recipes: {recipes.length}</h1>

      <div className="grid grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            handleWantToCook={handleWantToCook}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};
Recipes.propTypes = {
  handleWantToCook: PropTypes.func,
};
export default Recipes;
