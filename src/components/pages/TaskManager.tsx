import React from 'react';
import ColumnList from '../tasks/ColumnList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useParams } from 'react-router-dom';

const Tasks = () => {
 const { projects } = useTypedSelector((state) => state.manager);
 const { id } = useParams();

 return (
  <div>
   <ColumnList columns={projects.filter((project) => project.id === id)[0].columns} />
  </div>
 );
};

export default Tasks;
