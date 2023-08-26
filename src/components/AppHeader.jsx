/* eslint-disable react/prop-types */
import { BellAlertIcon } from "@heroicons/react/24/outline";

export default function AppHeader({ imgSrc, textValue }) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <img src={imgSrc} />
        <h1 className="font-ginger text-2xl mt-2 ml-2">{textValue}</h1>
      </div>
      <div className="bg-orange-100 rounded-full">
        <BellAlertIcon className="w-9 h-7 mt-2 text-[#FD6727] " />
      </div>
    </div>
  );
}
