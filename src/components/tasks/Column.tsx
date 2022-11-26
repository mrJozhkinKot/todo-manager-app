import React from 'react';
import { ColumnInterface, TaskInterface } from '../../utils/interfaces';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { ManagerActionType } from '../../utils/reducerTypes';

interface ColumnProps {
 column: ColumnInterface;
 tasks: TaskInterface[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
 const dispatch = useDispatch();

 const addNewTaskToThisColumn = () => {
  dispatch({
   type: ManagerActionType.ADD_NEW_TASK,
   payload: {
    tasksList: [
     ...tasks,
     {
      id: uuidv4(),
      number: 2,
      title: 'do homework11',
      description: '',
      dateCreate: '',
      timeInProgress: '',
      priority: '',
      status: 'on progress',
      comments: [],
      columnID: column.id,
     },
    ],
    colID: column.id,
    projectID: '1',
   },
  });
 };

 return (
  <div className="tasks_column">
   <div className="tasks_column-title">{column.title}</div>
   {tasks && <TaskList tasks={tasks} />}
   <div
    className="tasks_column-button"
    onClick={() => {
     console.log(column.title);
     addNewTaskToThisColumn();
    }}
   >
    Create Task
   </div>
  </div>
 );
};

export default Column;
