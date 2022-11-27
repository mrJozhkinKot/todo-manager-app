import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Modal from './components/modals/Modal';
import ProjectManager from './components/pages/ProjectManager';
import TaskManager from './components/pages/TaskManager';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
 const { isProjectModal } = useTypedSelector((state) => state.manager);
 return (
  <div className="App">
   <Routes>
    <Route path="/" element={<Layout />}>
     <Route index element={<ProjectManager />} />
     <Route path="/:id" element={<TaskManager />} />
    </Route>
   </Routes>
  </div>
 );
}
export default App;
