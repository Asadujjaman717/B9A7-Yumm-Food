import { useState } from "react";
import "./App.css";
import Cooks from "./components/CookSection/Cooks";
import Header from "./components/header/Header";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cooks, setCooks] = useState([]);
  const [currentlyCook, setCurrentlyCook] = useState([]);
  const [clickedRecipes, setClickedRecipes] = useState([]); 

  const handleWantToCook = (recipe) => {
    if(clickedRecipes.includes(recipe.food_id)) {
      toast.error("This recipe is already in your 'Want to cook' list!");
    } 
    else {
      setCooks([...cooks, recipe]);
      setClickedRecipes([...clickedRecipes, recipe.food_id]); 
    }
  };

  const handleCurrentCook = (recipe) => {
    setCooks(cooks.filter((item) => item.food_id !== recipe.food_id));
    setCurrentlyCook([...currentlyCook, recipe]);
     setClickedRecipes(clickedRecipes.filter(id => id !== recipe.food_id));
  };
  
  return (
    <>
      <ToastContainer />
      <Header></Header>
      <div className="text-center mb-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">Our Recipes</h2>
        <p>
        Discover an exceptional cooking class tailored for you!
        </p>
      </div>
      <div className="flex max-w-7xl mx-auto">
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Cooks cooks={cooks} currentlyCook={currentlyCook} handleCurrentCook={handleCurrentCook}></Cooks>
      </div>
    </>
  );
}

export default App;
