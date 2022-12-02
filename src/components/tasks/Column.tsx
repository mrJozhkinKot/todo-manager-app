import React from 'react';
import { ColumnInterface, TaskInterface, StatusListInterface } from '../../utils/interfaces';
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
 const { isModal, currentColumnId } = useTypedSelector((state) => state.manager);
 const statusList: StatusListInterface = {
  queue: 'at the waiting list',
  development: 'in progress',
  done: 'done',
 };

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
      status: 'in proccess',
      comments: [],
      columnID: column.id,
     },
    ],
    colID: column.id,
    projectID: id,
   },
  });
 };

 return (
  <div className="tasks_column">
   <div className="tasks_column-title">{column.title}</div>
   {isModal && currentColumnId === column.id && (
    <Modal
     modal={{ text: 'Create New Task', buttonValue: 'Create' }}
     onCreate={addNewTaskToThisColumn}
    />
   )}
   {tasks && <TaskList tasks={tasks} />}
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
