import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Login from './components/login/Login.jsx';
import Restaurant from './components/restaurant/Restaurant.jsx';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/restaurant' element={<Restaurant />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
