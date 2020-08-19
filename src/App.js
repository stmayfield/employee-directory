import React from 'react';
import './App.css';
import MainHeader from './components/Header/';
import Navbar from './components/Navbar/';
import EmployeeCard from './components/EmployeeCard';

function App() {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <div className="mx-sm-5">
        <EmployeeCard src="https://via.placeholder.com/150" />
        <EmployeeCard src="https://via.placeholder.com/175" />
        <EmployeeCard src="https://via.placeholder.com/200" />
      </div>
    </div>
  )
}

export default App;
