import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
