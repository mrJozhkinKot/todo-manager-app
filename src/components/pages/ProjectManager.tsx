import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Modal from '../modals/Modal';
import Project from '../tasks/Project';
import { ManagerActionType } from '../../utils/reducerTypes';

const Projects = () => {
 const { projects, isProjectModal } = useTypedSelector((state) => state.manager);
 const dispatch = useDispatch();

 const createProject = () => {
  dispatch({
   type: ManagerActionType.TOGGLE_IS_PROJECT_MODAL,
   payload: true,
  });
 };
 return (
  <div className="projects">
   {isProjectModal && <Modal modal={{ text: 'Create New Project!' }} />}
   <div className="projects_wrapper">
    {projects.map((project) => (
     <Project key={project.id} project={project} />
    ))}
   </div>
   <div className="projects_button" onClick={createProject}>
    Create Project
   </div>
  </div>
 );
};

export default Projects;
