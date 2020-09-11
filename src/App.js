import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import MainCont from './components/main-cont/MainCont';
import About from './components/about/About';
import Offers from './components/offers/Offers';

function App() {
  return (
    <div className="App">
        <Navbar />
        <MainCont />
        <About />
        <Offers />
    </div>
  );
}

export default App;
