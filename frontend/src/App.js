import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './menu';
import Admin from './admin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
  );
}

export default App;
