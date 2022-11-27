import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProjectInterface } from '../../utils/interfaces';
import { ManagerActionType } from '../../utils/reducerTypes';

interface ProjectProps {
 project: ProjectInterface;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
 const dispatch = useDispatch();
 const deleteProject = () => {
  dispatch({
   type: ManagerActionType.DELETE_PROJECT,
   payload: project.id,
  });
 };
 return (
  <div className="projects_project">
   <Link to={`/${project.id}`}>
    <div className="projects_project-title">{project.title}</div>
   </Link>
   <div className="projects_project-icons">
    <i className="fas fa-pencil-alt tasks_task-icon"></i>
    <i className="fas fa-trash-alt tasks_task-icon" onClick={deleteProject}></i>
   </div>
  </div>
 );
};

export default Project;
