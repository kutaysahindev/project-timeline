const ToolIcon = ({ src, name, shadow, setTool, setIsHovered }) => {
  // const shadow = "drop-shadow-"+name.toLowerCase()
  return (
    <div
      className={`cursor-pointer w-16 h-16 p-2 rounded-xl bg-black ${shadow} flex justify-center items-center select-none transition-all duration-500 delay-75`}
      onMouseEnter={() => {
        setTool(name)
        setIsHovered(true)
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="w-10 " src={src} alt={name} />
    </div>
  );
};
export default ToolIcon;
