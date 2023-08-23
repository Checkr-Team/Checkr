import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex items-center flex-col justify-center h-screen font-ginger">
      <h1 className="">Page Not Found 🥹</h1>
      <Link to="/">
        <div className="bg-blue-300 w-fit px-4 rounded-lg text-white hover:text-black hover:p-3">
          Home &gt;
        </div>
      </Link>
    </div>
  );
}
