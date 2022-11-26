import { createSlice } from '@reduxjs/toolkit';
import { ProjectInterface, TaskInterface, ColumnInterface } from '../utils/interfaces';

interface TasksState {
 projects: ProjectInterface[];
 project: ProjectInterface;
 columns: ColumnInterface[];
 tasks: TaskInterface[];
 task: TaskInterface;
}

const initialState: TasksState = {
 projects: [],
 project: {
  id: '',
  title: '',
  description: '',
 },
 columns: [
  { id: '1', title: 'Queue' },
  { id: '2', title: 'Development' },
  { id: '3', title: 'Done' },
 ],
 tasks: [],
 task: {
  id: '',
  number: 0,
  title: '',
  description: '',
  dateCreate: '',
  timeInProgress: '',
  priority: '',
  status: '',
  comments: [],
 },
};

export const tasksSlice = createSlice({
 name: 'tasks',
 initialState,
 reducers: {},
});

export default tasksSlice.reducer;
