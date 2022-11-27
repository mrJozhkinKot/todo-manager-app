import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectInterface } from '../../utils/interfaces';

interface ProjectProps {
 project: ProjectInterface;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
 return (
  <div className="projects_project">
   <Link to={`/${project.id}`}>
    <div className="projects_project-title">{project.title}</div>
   </Link>
   <div>
    <i className="fas fa-pencil-alt tasks_task-icon"></i>
    <i
     className="fas fa-trash-alt tasks_task-icon"
     onClick={() => console.log('delete project')}
    ></i>
   </div>
  </div>
 );
};

export default Project;
