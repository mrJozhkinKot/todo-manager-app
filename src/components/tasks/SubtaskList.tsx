import React from 'react';
import { ColumnInterface, TaskInterface } from '../../utils/interfaces';
import Subtask from './Subtask';

interface SubtaskListProps {
 task: TaskInterface;
 column: ColumnInterface;
}

const SubtaskList: React.FC<SubtaskListProps> = ({ task, column }) => {
 return (
  <div className="modal-edit_subtasks">
   {task.subtasks?.map((subtask) => (
    <Subtask key={subtask.id} subtask={subtask} task={task} column={column} />
   ))}
  </div>
 );
};

export default SubtaskList;
