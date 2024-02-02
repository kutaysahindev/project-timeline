const ToolName = ({ name, isVisible }) => {
  return (
    <div className={`h-10 ${isVisible ? "text-white" : "text-black"} flex items-center transition-all duration-500`}>
      <h2 className={`drop-shadow-white font-medium tracking-wider`}>{ name }</h2>
    </div>
  )
}
export default ToolName