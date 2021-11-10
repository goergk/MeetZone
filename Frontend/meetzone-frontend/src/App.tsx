import React from 'react';
import logo from './logo.svg';
import './App.css';
import Basketball from './components/icons/Basketball';
import Football from './components/icons/Football';
import Volleyball from './components/icons/Volleyball';
import Tennis from './components/icons/Tennis';
import Chess from './components/icons/Chess';
import Loader from './components/icons/Loader';
import MeetZone from './components/icons/MeetZone';
import TopNavbar from './components/navbars/TopNavbar';
import FilterNavbar from './components/navbars/FilterNavbar';


function App() {
  return (
    <div className="App">
      <TopNavbar />
      <FilterNavbar />
      {/* <Basketball />
      <Volleyball />
      <Football />
      <Tennis />
      <Chess />
      <Loader />
      <MeetZone /> */}
    </div>
  );
}

export default App;
