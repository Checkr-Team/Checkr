/* eslint-disable react/prop-types */
export default function SearchBar({
  children,
  value,
  onChangeHandler,
  placeholder,
  cssClass,
}) {
  return (
    <div className={`relative flex items-center ${cssClass}`}>
      {children}
      <input
        type="text"
        className="border rounded-2xl border-black p-2 pl-9 w-80 font-ginger"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
}
