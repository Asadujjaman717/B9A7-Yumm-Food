import { IoIosSearch } from "react-icons/io";
import profile from "../../resources/images/profile.png";
import cover from "../../resources/images/cheif2.jpg";
const Header = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 mb-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-3xl font-bold text-orange-600">Yumm!</h3>
        </div>

        <div>
          <ul className="flex justify-between gap-4 text-gray-400 font-bold">
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
            <li>Search</li>
          </ul>
        </div>

        <div className="flex">
          <div className="flex items-center max-w-md mx-auto border border-gray-300 rounded-full overflow-hidden mr-2">
            <button>
              <IoIosSearch className="h-5 w-5 text-gray-400 ml-3" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 outline-none"
            />
          </div>
          <div>
            <img className="h-10 w-10 rounded-full" src={profile} alt="" />
          </div>
        </div>
      </div>
      <div
        className="relative w-full h-screen bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold max-w-screen-lg text-center mb-4">
          Discover an exceptional cooking class tailored for you!
          </h1>
          <p>Tasty Yummy Food</p>

          <div className="flex mt-6">
            <button className="p-2 border-gray-300 bg-green-500 rounded-xl mr-4">Explore Now</button>
            <button className="p-2 border border-gray-100 rounded-xl">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
