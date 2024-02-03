import { useEffect, useState } from "react"

const ToolName = ({ name, isVisible, isHovered }) => {
  const [hidden, setHidden] = useState("block");

  useEffect(() => {
    if (isHovered) setHidden("block")
    const time = setTimeout(() => {if(!isHovered) setHidden("hidden")}, 500);
    return () => clearTimeout(time)
  }, [isHovered])
  
  return (
    <div className={`h-10 ${isHovered ? "text-white drop-shadow-white" : "text-transparent"} flex items-center transition-all duration-500 delay-75`}>
      <h2 className={`${hidden} select-none font-medium tracking-wider text-xl`}>{ name }</h2>
    </div>
  )
}
export default ToolName