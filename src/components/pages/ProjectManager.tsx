import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Modal from '../modals/Modal';
import Project from '../tasks/Project';
import { ManagerActionType } from '../../utils/reducerTypes';
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
 const { projects, isModal } = useTypedSelector((state) => state.manager);
 const dispatch = useDispatch();

 const openModal = () => {
  dispatch({
   type: ManagerActionType.TOGGLE_IS_MODAL,
   payload: true,
  });
 };
 const createProject = (valueTitle: string, valueDescription: string) => {
  dispatch({
   type: ManagerActionType.CREATE_NEW_PROJECT,
   payload: {
    id: uuidv4(),
    title: valueTitle,
    description: valueDescription,
    columns: [
     { id: 'queue', title: 'Queue', tasks: [] },
     { id: 'development', title: 'Development', tasks: [] },
     { id: 'done', title: 'Done', tasks: [] },
    ],
   },
  });
 };
 return (
  <div className="projects">
   {isModal && (
    <Modal
     modal={{ text: 'Create New Project!', buttonValue: 'Create' }}
     onCreate={createProject}
    />
   )}
   <div className="projects_wrapper">
    {projects.map((project) => (
     <Project key={project.id} project={project} />
    ))}
   </div>
   <div className="projects_button" onClick={openModal}>
    Create Project
   </div>
  </div>
 );
};

export default Projects;
