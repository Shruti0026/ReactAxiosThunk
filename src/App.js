import React from 'react';
import './App.css';
import Home from './components/Home';
import Forms from './components/Forms';
import UpdateDetails from './components/UpdateDetails';
import { BrowserRouter as Router, Route, Link ,Routes } from 'react-router-dom';
//import UserData from './components/UserData';

function App() {
  return (
    <div className="App"> 
      <Router>
          <Routes><Route exact path = '/' element = { <Home /> } ></Route>  
              <Route exact path = '/Home' element = { <Home /> } ></Route>  
              <Route exact path='/Forms' element={<Forms />}></Route>
              <Route exact path='/edit/:id' element={<UpdateDetails />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
