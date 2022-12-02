import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ProjectInterface } from '../../utils/interfaces';
import { ManagerActionType } from '../../utils/reducerTypes';
import Modal from '../modals/Modal';

interface ProjectProps {
 project: ProjectInterface;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
 const dispatch = useDispatch();
 const { isModalEdit, currentProjectId } = useTypedSelector((state) => state.manager);
 const openModal = () => {
  dispatch({ type: ManagerActionType.SET_PROJECT_ID, payload: project.id });
  dispatch({
   type: ManagerActionType.TOGGLE_IS_MODAL_EDIT,
   payload: true,
  });
 };
 const deleteProject = () => {
  dispatch({
   type: ManagerActionType.DELETE_PROJECT,
   payload: project.id,
  });
 };
 const editProject = (valueTitle: string, valueDescription: string) => {
  dispatch({
   type: ManagerActionType.EDIT_PROJECT,
   payload: {
    project: { ...project, title: valueTitle, description: valueDescription },
    projectID: project.id,
   },
  });
 };
 return (
  <div className="projects_project">
   {currentProjectId === project.id && isModalEdit && (
    <Modal
     modal={{ text: 'Edit your project', buttonValue: 'Edit' }}
     project={project}
     onCreate={editProject}
    />
   )}
   <Link to={`/${project.id}`}>
    <div className="projects_project-title">{project.title}</div>
   </Link>
   <div className="projects_project-icons">
    <i className="fas fa-pencil-alt tasks_task-icon" onClick={openModal}></i>
    <i className="fas fa-trash-alt tasks_task-icon" onClick={deleteProject}></i>
   </div>
  </div>
 );
};

export default Project;
