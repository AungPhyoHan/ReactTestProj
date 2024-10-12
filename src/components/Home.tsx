import { useNavigate } from "react-router-dom";
import Sizebox from "./Sizebox";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-[60px] font-bold text-center text-orange-400">
          Home Page
        </h1>
        <Sizebox height={20} />
        <p className="text-[20px] text-center text-white">
          {" "}
          This is practice for React Typescript. You're welcome.
        </p>
      </div>
      <Sizebox height={20} />
      <div className="text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 mx-2 rounded"
          onClick={() => navigate("/message")}
        >
          Cities Page
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-3 mx-2 rounded"
          onClick={() => navigate("/records")}
        >
          Records Page
        </button>
      </div>
    </div>
  );
};

export default Home;
