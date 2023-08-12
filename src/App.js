import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Home from './components/Home';
import Reservetable from './components/Reservetable';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Header}>
          <Route index Component={Home}/>
          <Route path='/bookingtable' Component={Reservetable}/>
          <Route path='/login' Component={Login}/>
          <Route path='/signup' Component={Signup}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
