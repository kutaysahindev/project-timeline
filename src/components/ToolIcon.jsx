const ToolIcon = ({ src, name, shadow, setTool }) => {
  // const shadow = "drop-shadow-"+name.toLowerCase()
  return (
    <div
      className={`cursor-pointer w-16 h-16 p-2 rounded-xl bg-black ${shadow} flex justify-center items-center transition-all duration-500`}
      onMouseEnter={() => setTool(name)}
      // onMouseLeave={() => setTool("")}
    >
      <img className="w-10 " src={src} alt={name} />
    </div>
  );
};
export default ToolIcon;
