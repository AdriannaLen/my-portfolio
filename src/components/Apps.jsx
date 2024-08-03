import { projects } from '../constants';

const Apps = () => {
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.title && <h2>{project.title}</h2>}
            {project.link && <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer">{project.link}</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Apps;