import { projects } from "../constants";

const Apps = () => {
  return (
    <div id="projects" className="min-h-auto mx-auto p-4 bg-paleSky">
      <h2 className="font-cormorantGaramond font-semibold text-text uppercase text-[1.5rem] sm:text-[2rem] m-2 sm:m-8 text-center tracking-wider">
        my projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative p-3 sm:p-6 rounded-xl"
          >
            {project.link ? (
              <a
                href={`https://${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:underline"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.photo}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </a>
            ) : (
              <span className="text-gray-500">No link available</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
