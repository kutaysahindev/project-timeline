import { FaGithub } from "react-icons/fa";
import { tools } from "../utils/tools";
import ToolIcon from "./ToolIcon";
import ToolName from "./ToolName";
import { useState } from "react";
import CountUpCard from "./CountUpCard";
import DownArrow from '../assets/down-arrow.svg'

const Welcome = () => {
  const [tool, setTool] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="p-10 md:p-20 lg:p-40 flex flex-col items-center gap-8">
      <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold text-center">
        Arçelik AI Platform
      </h1>
      <h6 className="text-sm md:text-base text-gray-600 font-semibold text-center">
        Project Showcase
      </h6>
      <div className="w-64 lg:w-full flex items-center justify-center flex-wrap gap-5">
        {tools.map(t => (
          <ToolIcon key={t.id} src={t.src} name={t.name} shadow={t.shadow} setTool={setTool} setIsHovered={setIsHovered} />
        ))}
      </div>
      <ToolName name={tool} isVisible={tool} isHovered={isHovered}/>
      <div className=' flex justify-evenly gap-6'>
        <CountUpCard language={"C#"} lines={3682} />
        <CountUpCard language={"JS"} lines={2572} />
        <CountUpCard language={"CSS"} lines={1481} />
      </div>
      <a href="https://github.com/kutaysahindev/ArcelikAI" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        <FaGithub size={20} />
        <span className="leading-none">View on GitHub</span>
      </a>
      <a href="#timeline"><img src={DownArrow} className="w-10 mt-3 cursor-pointer" alt="down" /></a>
    </div>
  );
};
export default Welcome;
