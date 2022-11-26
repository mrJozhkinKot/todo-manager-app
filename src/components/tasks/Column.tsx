import React from 'react';
import { ColumnInterface } from '../../../../todo-manager-app1/src/utils/interfaces';
import Tasks from './Tasks';

interface ColumnProps {
 column: ColumnInterface;
}
const Column: React.FC<ColumnProps> = ({ column }) => {
 return (
  <div className="tasks_column">
   <div className="tasks_column-title">{column.title}</div>
   <Tasks />
   <div
    className="tasks_column-button"
    onClick={() => {
     console.log(column.title);
    }}
   >
    Create Task
   </div>
  </div>
 );
};

export default Column;
