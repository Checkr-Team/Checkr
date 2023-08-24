import { NavLink } from "react-router-dom";

export default function BottomBar() {
  return (
    <div className="shadow-inner h-20 flex justify-around items-center">
      <NavLink to="home">
        <h1>Home</h1>
      </NavLink>
      <NavLink to="record">
        <h1>Record</h1>
      </NavLink>
      <NavLink to="search">
        <h1>Search</h1>
      </NavLink>
      <NavLink to="settings">
        <h1>Settings</h1>
      </NavLink>
    </div>
  );
}
