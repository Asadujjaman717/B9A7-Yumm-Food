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

  const handleWantToCook = (recipe) => {
    // Check if recipe already exists in the list
    const exists = cooks.some((item) => item.id === recipe.id);
    if (exists) {
      // Show a toast notification if already exists
      toast.error("This recipe is already in your 'Want to cook' list!");
    } else {
      // Add recipe to the cooks list if it doesn't exist
      setCooks([...cooks, recipe]);
    }
  };
  const handleCurrentCook = (recipe) => {
    setCooks(cooks.filter((item) => item.id !== recipe.id));
    setCurrentlyCook([...currentlyCook, recipe]);
  };
  
  // const [cooks, setCooks] = useState([]);
  // const [currentlyCook, setCurrentlyCook] = useState([]);

  // const handleWantToCook = (recipe) => {
  //   setCooks((prevCooks) => [...prevCooks, recipe]);
  // };

  // const handleCurrentCook = (recipe) => {
  //   // Remove the selected recipe from 'cooks' and add it to 'currentlyCook'
  //   setCooks((prevCooks) => prevCooks.filter((item) => item.food_id !== recipe.food_id));
  //   setCurrentlyCook((prevCurrentlyCook) => [...prevCurrentlyCook, recipe]);
  // };
  return (
    <>
    <ToastContainer />
      <Header></Header>
      <div className="text-center mb-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">Our Recipes</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quia
          omnis harum laborum ducimus laudantium!
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
