import { useState } from "react";
import {
  BellAlertIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import { Outlet } from "react-router-dom";

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("Olufemi");
  const [search, setSearch] = useState("");

  return (
    <div className="h-screen py-8 px-4 font-ginger">
      <div className="flex justify-between">
        <div className="flex">
          <img src="../../src/assets/images/avatar.png" />
          <h1 className="font-ginger text-2xl mt-2 ml-2">Hi, {user}</h1>
        </div>
        <div className="bg-orange-100 rounded-full">
          <BellAlertIcon className="w-9 h-7 mt-2 text-[#FD6727] " />
        </div>
      </div>
      <SearchBar
        placeholder="Search"
        cssClass="mt-8 "
        value={search}
        onChangeHandler={setSearch}
      >
        <MagnifyingGlassIcon className="h-5 w-5 absolute m-1 pointer-events-none" />
      </SearchBar>
      <div className="flex justify-between mt-8">
        <h1 className="text-xl">Categories</h1>
        <p className="text-[#5A5A5A] mt-1">View more &gt;</p>
      </div>
      <Filter />
      <Outlet />
    </div>
  );
}
