import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function BottomBar() {
  return (
    <div className="shadow-inner h-20 flex justify-around items-center sticky bottom-0 bg-white">
      <NavLink to="home">
        <>
          <HomeIcon className="h-6 w-6 mx-auto" />
          <p>Home</p>
        </>
      </NavLink>
      <NavLink to="record">
        <>
          <ClipboardDocumentListIcon className="h-6 w-6 mx-auto" />
          <p>Record</p>
        </>
      </NavLink>
      <NavLink to="search">
        <>
          <MagnifyingGlassIcon className="h-6 w-6 mx-auto" />
          <h1>Search</h1>
        </>
      </NavLink>
      <NavLink to="settings">
        <>
          <Cog6ToothIcon className="h-6 w-6 mx-auto" />
          <h1>Settings</h1>
        </>
      </NavLink>
    </div>
  );
}
