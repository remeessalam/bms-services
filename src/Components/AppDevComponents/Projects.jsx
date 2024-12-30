import { useNavigate } from "react-router-dom";
import { projects } from "../../pages/AppDevPages/constant";

const Projects = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/work");
  };
  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          {projects.map((project, index) => (
            <div
              data-aos="fade-up"
              key={index}
              onClick={handleClick}
              className={`group relative  ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:pt-40"
              }`}
            >
              <div className="overflow-hidden rounded-lg bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div className="flex flex-col">
                  <h3 className="text-white cursor-pointer text-lg font-medium pr-4">
                    {project.title}
                  </h3>
                  <p className="desc cursor-pointer">{project.desc}</p>
                </div>
                {/* <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-black text-sm font-bold">
                    {project.number}
                  </span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
