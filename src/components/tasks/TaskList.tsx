import React from 'react';
import Task from './Task';
import { ColumnInterface, TaskInterface } from '../../utils/interfaces';

interface TaskListInterface {
 tasks: TaskInterface[];
 column: ColumnInterface;
}

const TaskList: React.FC<TaskListInterface> = ({ tasks, column }) => {
 return (
  <div className="tasks_task-wrapper">
   {tasks.map((task) => (
    <Task key={task.id} task={task} column={column} />
   ))}
  </div>
 );
};

export default TaskList;
