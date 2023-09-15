import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import EmpLogin from './EmpLogin'

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing/>}/>
          <Route path='/employee/create' element={<EmpCreate/>}/>
          <Route path='/employee/detail/:empid' element={<EmpDetail/>}/>
          <Route path='/employee/edit/:empid' element={<EmpEdit/>}/>
          
          <Route path='/employee/login' element={<EmpLogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
