import React from 'react';
import { useDispatch } from 'react-redux';
import { TaskInterface } from '../../utils/interfaces';
import { ManagerActionType } from '../../utils/reducerTypes';

interface TaskProps {
 task: TaskInterface;
}

const Task: React.FC<TaskProps> = ({ task }) => {
 const dispatch = useDispatch();
 const deleteTaskFromThisColumn = () => {
  console.log('delete');
  dispatch({
   type: ManagerActionType.DELETE_TASK,
   payload: { taskID: task.id, colID: task.columnID, projectID: '1' },
  });
 };
 return (
  <div className="tasks_task">
   <div className="tasks_task-title">{task.title}</div>
   <div className="tasks_task-icons">
    <i className="fas fa-pencil-alt tasks_task-icon"></i>
    <i className="fas fa-trash-alt tasks_task-icon" onClick={() => deleteTaskFromThisColumn()}></i>
   </div>
  </div>
 );
};

export default Task;
