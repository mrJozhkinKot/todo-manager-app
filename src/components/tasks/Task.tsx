import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TaskInterface } from '../../utils/interfaces';
import { ManagerActionType } from '../../utils/reducerTypes';
import ModalEdit from '../modals/ModalEdit';

interface TaskProps {
 task: TaskInterface;
}

const Task: React.FC<TaskProps> = ({ task }) => {
 const { isModalEdit, currentTaskId } = useTypedSelector((state) => state.manager);
 const { id } = useParams();

 const openModal = () => {
  dispatch({ type: ManagerActionType.SET_TASK_ID, payload: task.id });
  dispatch({ type: ManagerActionType.TOGGLE_IS_MODAL_EDIT, payload: true });
 };

 const dispatch = useDispatch();
 const deleteTaskFromThisColumn = () => {
  dispatch({
   type: ManagerActionType.DELETE_TASK,
   payload: { taskID: task.id, colID: task.columnID, projectID: '1' },
  });
 };

 const editTask = (taskChanged: TaskInterface) => {
  dispatch({
   type: ManagerActionType.EDIT_TASK,
   payload: { task: taskChanged, projectID: id, colID: task.columnID, taskID: task.id },
  });
 };
 return (
  <Fragment>
   {currentTaskId === task.id && isModalEdit && <ModalEdit task={task} onSubmit={editTask} />}
   <div className="tasks_task">
    <div className="tasks_task-title" onClick={openModal}>
     {task.title}
    </div>
    <div className="tasks_task-icons">
     <i className="fas fa-pencil-alt tasks_task-icon" onClick={openModal}></i>
     <i className="fas fa-trash-alt tasks_task-icon" onClick={() => deleteTaskFromThisColumn()}></i>
    </div>
   </div>
  </Fragment>
 );
};

export default Task;
