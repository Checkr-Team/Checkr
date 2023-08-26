import FilterContainerText from "./FilterContainerText";
import { NavLink } from "react-router-dom";

export default function Filter() {
  return (
    <div className="flex justify-between my-4">
      <NavLink to="all">
        <FilterContainerText>All</FilterContainerText>
      </NavLink>
      <NavLink to="dentistry">
        <FilterContainerText>Dentistry</FilterContainerText>
      </NavLink>
      <NavLink to="laboratory">
        <FilterContainerText>Laboratory</FilterContainerText>
      </NavLink>
      <NavLink to="surgery">
        <FilterContainerText>Surgery</FilterContainerText>
      </NavLink>
    </div>
  );
}
