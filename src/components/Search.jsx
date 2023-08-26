import AppHeader from "./AppHeader";
import SearchBar from "./SearchBar";
import AppSection from "./AppSection";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ImageContainer from "./ImageContainer";

export default function Search() {
  return (
    <div className="h-screen py-8 px-4 font-ginger">
      <AppHeader textValue="&lt; Search" />
      <SearchBar cssClass="mt-8" placeholder="Search">
        <MagnifyingGlassIcon className="h-5 w-5 absolute m-1 pointer-events-none" />
      </SearchBar>
      <AppSection firstChild="Result" secondChild="Filter" />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <ImageContainer
          imgSrc="/images/image1.png"
          Treatment="Malaria Parasite Test"
          Doctor="Dr.Eniola"
          Date="02-08-2023"
          Location="Laboratory"
        />
        <ImageContainer
          imgSrc="/images/image2.png"
          Treatment="Dental Checkup"
          Doctor="Dr.Eniola"
          Date="02-08-2023"
          Location="Denistry"
        />
        <ImageContainer
          imgSrc="/images/image3.png"
          Treatment="Widal Test"
          Doctor="Dr.Tosin"
          Date="02-08-2023"
          Location="Laboratory"
        />
        <ImageContainer
          imgSrc="/images/image4.png"
          Treatment="Pack Cell Volume"
          Doctor="Dr.Jide"
          Date="02-08-2023"
          Location="Laboratory"
        />
      </div>
    </div>
  );
}
