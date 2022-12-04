import React from 'react';
import { ColumnInterface, TaskInterface } from '../../utils/interfaces';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { ManagerActionType } from '../../utils/reducerTypes';
import Modal from '../modals/Modal';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import moment from 'moment';

interface ColumnProps {
 column: ColumnInterface;
 tasks: TaskInterface[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
 const dispatch = useDispatch();
 const { id } = useParams();
 const { isModal, currentColumnId, currentColumn, currentTask } = useTypedSelector(
  (state) => state.manager
 );

 const setCurrentColumnId = () => {
  dispatch({
   type: ManagerActionType.SET_COLUMN_ID,
   payload: column.id,
  });
 };
 const openTaskModal = async () => {
  dispatch({
   type: ManagerActionType.TOGGLE_IS_MODAL,
   payload: true,
  });
 };
 const addNewTaskToThisColumn = (valueTitle: string, valueDescription: string) => {
  dispatch({
   type: ManagerActionType.ADD_NEW_TASK,
   payload: {
    tasksList: [
     ...tasks,
     {
      id: uuidv4(),
      number: 8,
      title: valueTitle,
      description: valueDescription,
      dateCreate: moment().format('LLL'),
      timeInProgress: '',
      priority: 'middle',
      status: column.id,
      comments: [],
      columnID: column.id,
     },
    ],
    colID: column.id,
    projectID: id,
   },
  });
 };

 const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
 };

 const dropHandler = (e: React.DragEvent<HTMLDivElement>, column: ColumnInterface) => {
  e.preventDefault();
  e.stopPropagation();
  column.tasks.push({ ...currentTask, status: column.id });
  const currentIndex = currentColumn.tasks.indexOf(currentTask);
  currentColumn.tasks.splice(currentIndex, 1);
  dispatch({
   type: ManagerActionType.SORT_TASKS,
   payload: {
    projectID: id,
    draggableColumn: currentColumn,
    dropableColumn: column,
   },
  });
 };

 return (
  <div
   className="tasks_column"
   onDragOver={(e: React.DragEvent<HTMLDivElement>) => dragOverHandler(e)}
   onDrop={(e: React.DragEvent<HTMLDivElement>) => dropHandler(e, column)}
  >
   <div className="tasks_column-title">{column.title}</div>
   {isModal && currentColumnId === column.id && (
    <Modal
     modal={{ text: 'Create New Task', buttonValue: 'Create' }}
     onCreate={addNewTaskToThisColumn}
    />
   )}
   {tasks && <TaskList tasks={tasks} column={column} />}
   <div
    className="tasks_column-button"
    onClick={() => {
     setCurrentColumnId();
     openTaskModal();
    }}
   >
    Create Task
   </div>
  </div>
 );
};

export default Column;
