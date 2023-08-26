/* eslint-disable react/prop-types */
export default function AppSection({ firstChild, secondChild }) {
  return (
    <div className="flex justify-between mt-8">
      <h1 className="text-xl">{firstChild}</h1>
      <p className="text-[#5A5A5A] mt-1">{secondChild}</p>
    </div>
  );
}
