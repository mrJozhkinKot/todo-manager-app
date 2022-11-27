import Column from './Column';
import { ColumnInterface } from '../../utils/interfaces';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Modal from '../modals/Modal';

interface ColumnListProps {
 columns: ColumnInterface[];
}

const ColumnList: React.FC<ColumnListProps> = ({ columns }) => {
 const { isModal } = useTypedSelector((state) => state.manager);
 return (
  <div className="tasks_wrapper">
   {columns.map((col) => (
    <Column key={col.id} column={col} tasks={col.tasks} />
   ))}
  </div>
 );
};

export default ColumnList;
