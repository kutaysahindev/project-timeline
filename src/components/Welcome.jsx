import { FaGithub } from "react-icons/fa";
import { tools } from "../utils/tools";
import ToolIcon from "./ToolIcon";
import ToolName from "./ToolName";
import { useState } from "react";

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
      <div className="flex items-center justify-center flex-wrap gap-5">
        {tools.map(t => (
          <ToolIcon key={t.id} src={t.src} name={t.name} shadow={t.shadow} setTool={setTool} setIsHovered={setIsHovered} />
        ))}
      </div>
      <ToolName name={tool} isVisible={tool} isHovered={isHovered}/>
      <a href="https://github.com/kutaysahindev/ArcelikAI" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        <FaGithub size={20} />
        <span className="leading-none">View on GitHub</span>
      </a>
    </div>
  );
};
export default Welcome;
