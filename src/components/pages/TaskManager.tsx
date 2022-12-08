import React, { useEffect } from 'react';
import ColumnList from '../tasks/ColumnList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useParams } from 'react-router-dom';

const Tasks = () => {
 const { manager } = useTypedSelector((state) => state);
 const { id } = useParams();

 useEffect(() => {
  return localStorage.setItem('state', JSON.stringify(manager));
 });

 return (
  <div>
   <ColumnList columns={manager.projects.filter((project) => project.id === id)[0].columns} />
  </div>
 );
};

export default Tasks;
