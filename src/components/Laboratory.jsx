import ImageContainer from "./ImageContainer";

export default function Laboratory() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <ImageContainer
        imgSrc="/images/image1.png"
        Treatment="Malaria Parasite Test"
        Doctor="Dr.Eniola"
        Date="02-08-2023"
        Location="Laboratory"
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
  );
}
