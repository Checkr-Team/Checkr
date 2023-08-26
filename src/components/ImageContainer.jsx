/* eslint-disable react/prop-types */
export default function ImageContainer({
  imgSrc,
  Treatment,
  Doctor,
  Date,
  Location,
}) {
  return (
    <div className="border w-fit p-2 border-black rounded-2xl relative">
      <img src={imgSrc} />
      <div className="flex flex-col items-center absolute bottom-5  bg-white/25 text-white rounded-2xl w-40 font-ginger">
        <p className="text-sm">{Treatment}</p>
        <p className="text-xs">{Doctor}</p>
        <p className="text-sm">{Date}</p>
        <p className="text-xs">{Location}</p>
      </div>
    </div>
  );
}
