import Column from './Column';
import { ColumnInterface } from '../../utils/interfaces';

interface ColumnListProps {
 columns: ColumnInterface[];
}

const ColumnList: React.FC<ColumnListProps> = ({ columns }) => {
 return (
  <div className="tasks_wrapper">
   {columns.map((col) => (
    <Column key={col.id} column={col} tasks={col.tasks} />
   ))}
  </div>
 );
};

export default ColumnList;
