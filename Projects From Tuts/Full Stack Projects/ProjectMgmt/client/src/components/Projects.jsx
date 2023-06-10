import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQuery';
import ProjectCard from '../components/ProjectCard';
import Spinner from './Spinner';

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  console.log(data, error);
  return (
    <>
      {data?.projects.length > 0 ? (
        <div className="row">
          {data?.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}
export default Projects;
