import React, { useState } from 'react';
import { ColumnInterface } from '../../../../todo-manager-app1/src/utils/interfaces';
import Columns from '../tasks/Columns';
import { tasksSlice } from '../../reducers/tasksReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const Tasks = () => {
 const { columns } = useAppSelector((state) => state.tasksReducer);

 return (
  <div>
   <Columns columns={columns} />
  </div>
 );
};

export default Tasks;
