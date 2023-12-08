import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './menu';
import Admin from './admin';
import AddPlat from './CreatePlat';
import EditPlat from './UpdatePlat';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/admin/platForm' element={<AddPlat/>}/>
      <Route path='/admin/edit-plat/:id' element={<EditPlat/>}/>
    </Routes>
  );
}

export default App;
