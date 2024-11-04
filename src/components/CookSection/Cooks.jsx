import PropTypes from "prop-types";
import Cook from "../Cook/Cook";
import CurrentCooking from "../CurrentCooking/CurrentCooking";

const Cooks = ({ cooks, currentlyCook, handleCurrentCook}) => {


  return (
    <div className="w-1/2 border rounded-lg m-2 mt-14">
      <h2 className="font-bold text-center m-2">
        Want to cook: {cooks.length}
      </h2>
      <hr />
      {
        cooks.map((cook, idx) =>(
            <Cook key={idx} cook={cook} handleCurrentCook={handleCurrentCook} ></Cook>
        ))}

        <h2 className="font-bold text-center m-2">Currently cooking: {currentlyCook.length}</h2>
        <hr />
      {currentlyCook.map((cook) => (
        <CurrentCooking key={cook.food_id} cook={cook} />
      ))}
        
    </div>
  );
};
Cooks.propTypes = {
  cooks: PropTypes.array,
  currentlyCook: PropTypes.array,
  handleCurrentCook: PropTypes.func
};
export default Cooks;
