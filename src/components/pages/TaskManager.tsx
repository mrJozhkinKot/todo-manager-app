import React from 'react';
import ColumnList from '../tasks/ColumnList';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Tasks = () => {
 const { projects } = useTypedSelector((state) => state.manager);

 return (
  <div>
   <ColumnList columns={projects[0].columns} />
  </div>
 );
};

export default Tasks;
