import PropTypes from "prop-types";
const Cook = ({cook, handleCurrentCook}) => {
    const {food_id,food_title,cooking_time,calories} = cook;
    
   
    return (
        <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-left">
      <thead>
          <tr className="border-b">
            <th className="px-6 py-3 text-gray-700 font-semibold"></th>
            <th className="px-6 py-3 text-gray-700 font-semibold">Name</th>
            <th className="px-6 py-3 text-gray-700 font-semibold">Time</th>
            <th className="px-6 py-3 text-gray-700 font-semibold">Calories</th>
            
          </tr>
        </thead>
        <tbody>        
            <tr key={food_id} className="border-b hover:bg-gray-50 bg-gray-100 ">
              <td className="px-6 py-4">{food_id}</td>
              <td className="px-6 py-4">{food_title}</td>
              <td className="px-6 py-4">{cooking_time}</td>
              <td className="px-6 py-4">{calories}</td>
              <td><button onClick={()=>handleCurrentCook(cook)} className="bg-green-500 px-4 py-2 rounded-3xl text-black font-semibold">Preparing</button></td>
            </tr>       
        </tbody>
      </table>
    </div>
  );
};

Cook.propTypes = {
    cook: PropTypes.object,
    handleCurrentCook: PropTypes.func
}
export default Cook;