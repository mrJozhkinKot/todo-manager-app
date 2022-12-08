import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ColumnInterface, TaskInterface } from '../../utils/interfaces';
import { ManagerActionType } from '../../utils/reducerTypes';
import ModalEdit from '../modals/ModalEdit';

interface TaskProps {
 task: TaskInterface;
 column: ColumnInterface;
}

const Task: React.FC<TaskProps> = ({ task, column }) => {
 const { isModalEdit, currentTaskId, currentColumn, currentTask } = useTypedSelector(
  (state) => state.manager
 );
 const { id } = useParams();

 const openModal = () => {
  dispatch({ type: ManagerActionType.SET_TASK_ID, payload: task.id });
  dispatch({ type: ManagerActionType.TOGGLE_IS_MODAL_EDIT, payload: true });
 };

 const dispatch = useDispatch();
 const deleteTaskFromThisColumn = () => {
  dispatch({
   type: ManagerActionType.DELETE_TASK,
   payload: { taskID: task.id, colID: column.id, projectID: id },
  });
 };

 const editTask = (taskChanged: TaskInterface) => {
  dispatch({
   type: ManagerActionType.EDIT_TASK,
   payload: { task: taskChanged, projectID: id, colID: column.id, taskID: task.id },
  });
 };

 const dragStartHandler = (
  e: React.DragEvent<HTMLDivElement>,
  task: TaskInterface,
  column: ColumnInterface
 ) => {
  dispatch({ type: ManagerActionType.SET_CURRENT_TASK, payload: task });
  dispatch({
   type: ManagerActionType.SET_CURRENT_COLUMN,
   payload: column,
  });
 };

 const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
  e.currentTarget.style.opacity = '1';
 };

 const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
  e.currentTarget.style.opacity = '1';
 };

 const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  e.stopPropagation();
  if (e.currentTarget.className === 'tasks_task') {
   e.currentTarget.style.opacity = '0.2';
  }
 };

 const dropHandler = (
  e: React.DragEvent<HTMLDivElement>,
  task: TaskInterface,
  column: ColumnInterface
 ) => {
  e.currentTarget.style.opacity = '1';
  e.preventDefault();
  e.stopPropagation();
  const currentIndex = currentColumn.tasks.indexOf(currentTask);
  currentColumn.tasks.splice(currentIndex, 1);
  const dropIndex = column.tasks.indexOf(task);
  column.tasks.splice(dropIndex + 1, 0, { ...currentTask, status: column.id });
  dispatch({
   type: ManagerActionType.SORT_TASKS,
   payload: {
    projectID: id,
    draggableColumn: currentColumn,
    dropableColumn: {
     ...column,
     tasks: column.tasks.map((t) => {
      if (t.id === currentTaskId) {
       return { ...t };
      }
      return t;
     }),
    },
   },
  });
 };
 return (
  <Fragment>
   {currentTaskId === task.id && isModalEdit && (
    <ModalEdit task={task} column={column} onSubmit={editTask} />
   )}
   <div
    className="tasks_task"
    onDragStart={(e: React.DragEvent<HTMLDivElement>) => dragStartHandler(e, task, column)}
    onDragLeave={(e: React.DragEvent<HTMLDivElement>) => dragLeaveHandler(e)}
    onDragEnd={(e: React.DragEvent<HTMLDivElement>) => dragEndHandler(e)}
    onDragOver={(e: React.DragEvent<HTMLDivElement>) => dragOverHandler(e)}
    onDrop={(e: React.DragEvent<HTMLDivElement>) => dropHandler(e, task, column)}
    draggable={true}
   >
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
