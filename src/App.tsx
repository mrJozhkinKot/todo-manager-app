import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ProjectManager from './components/pages/ProjectManager';
import TaskManager from './components/pages/TaskManager';

function App() {
 return (
  <div className="App">
   <Routes>
    <Route path="/" element={<Layout />}>
     <Route index element={<ProjectManager />} />
     <Route path="/tasks" element={<TaskManager />} />
    </Route>
   </Routes>
  </div>
 );
}
export default App;
