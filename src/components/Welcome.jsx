import { FaGithub } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="p-40 flex flex-col items-center gap-5">
      <h1 className="text-7xl font-bold">Arçelik AI Platform</h1>
      <h6 className="text-gray-600 font-semibold">Project Showcase</h6>
      <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        <FaGithub />
        View on GitHub
      </button>
    </div>
  );
};
export default Welcome;
