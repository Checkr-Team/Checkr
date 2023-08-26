import ImageContainer from "./ImageContainer";

export default function Dentistry() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <ImageContainer
        imgSrc="/images/image2.png"
        Treatment="Dental Checkup"
        Doctor="Dr.Eniola"
        Date="02-08-2023"
        Location="Denistry"
      />
    </div>
  );
}
