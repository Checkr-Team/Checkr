import { Link } from "react-router-dom";

export default function Splash() {
  return (
    <div className="h-screen bg-gradient-to-r from-[#3870FF] to-[#83A5FF]">
      <div className="h-1/3"></div>
      <div className="  flex flex-col justify-around items-center h-2/3 ">
        <h1 className="font-octa-brain text-5xl underline underline-offset-8 text-white  mb-40">
          CHECKR
        </h1>
        <Link to="/login">
          <button className=" bg-white text-[#3870FF] font-ginger px-4 py-2 rounded-md">
            Enter &gt;
          </button>
        </Link>
      </div>
    </div>
  );
}
