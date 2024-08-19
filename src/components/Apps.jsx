import { projects } from '../constants';

const Apps = () => {
  return (
    <div id="projects" className="h-[100vh] mx-auto p-4 bg-slate-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="p-4 shadow-lg hover:shadow-xl transition-shadow">
            {project.link ? (
              <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              <img src={project.photo} alt={project.title} className="mb-4 w-full h-50 object-cover" />
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