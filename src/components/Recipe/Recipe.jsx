import PropTypes from "prop-types";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineLocalFireDepartment } from "react-icons/md";


const Recipe = ({ recipe, handleWantToCook }) => {
  const {
    food_image,
    food_title,
    food_description,
    ingredients,
    cooking_time,
    calories,
  } = recipe;

  return (
    <div className="border rounded-lg px-4">
      <img className="rounded-2xl my-4 w-full h-40" src={food_image} alt="" />
      <h3 className="font-bold text-lg">{food_title}</h3>
      <p className="my-2">{food_description}</p>
      <hr />
      <h5 className="font-bold">Ingredients: {ingredients.length}</h5>
      <p>
        {ingredients.map((ingredient, idx) => (
          <span key={idx}>
            <li>{ingredient}</li>
          </span>
        ))}
      </p>
      <hr />
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-1">
        <MdOutlineWatchLater />
        <p>{cooking_time} minutes</p>
        </div>
        <div className="flex justify-center items-center gap-1">
        <MdOutlineLocalFireDepartment />
        <p>{calories} calories</p>
        </div>
      </div>
      <button
        onClick={() => handleWantToCook(recipe)}
        className="px-4 py-2 bg-green-500 rounded-3xl text-gray-800 font-bold mb-2 mt-2"
      >
        Want to Cook
      </button>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object,
  handleWantToCook: PropTypes.func
};
export default Recipe;
