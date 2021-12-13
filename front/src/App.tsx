import React, {Fragment} from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
