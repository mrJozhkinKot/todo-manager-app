import React from 'react';
import Task from './Task';
import { TaskInterface } from '../../utils/interfaces';

interface TaskListInterface {
 tasks: TaskInterface[];
}

const TaskList: React.FC<TaskListInterface> = ({ tasks }) => {
 return (
  <div className="tasks_task-wrapper">
   {tasks.map((task) => (
    <Task key={task.id} task={task} />
   ))}
  </div>
 );
};

export default TaskList;
