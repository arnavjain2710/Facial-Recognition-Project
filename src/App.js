import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import Attendance from './pages/Attendance';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
   <>
      <Router>
      <Navbar/>
      <div className="mx-3 my-3">
      <Routes>     
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/Attendance' element={<Attendance/>}></Route>
          <Route exact path='/Register' element={<Register/>}></Route>
          <Route exact path='/Login' element={<Login/>}></Route>
      </Routes>
      </div>
      </Router>
    </>
    </>
  );
}

export default App;
