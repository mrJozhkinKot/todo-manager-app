import Column from './Column';
import { ColumnInterface } from '../../utils/interfaces';

interface ColumnProps {
 columns: ColumnInterface[];
}

const Columns: React.FC<ColumnProps> = ({ columns }) => {
 return (
  <div className="tasks_wrapper">
   {columns.map((col) => (
    <Column key={col.id} column={col} />
   ))}
  </div>
 );
};

export default Columns;
