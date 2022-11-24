import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Projects from './components/pages/Projects'
import Tasks from './components/pages/Tasks';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Projects/>} />
    <Route path='/tasks' element={<Tasks/>} />
  </Route>
</Routes>
    </div>
  );
}

export default App;
