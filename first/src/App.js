// App.js

import React from 'react';
import Navbar from './Navbar';
import PercentageStat from './PercentageStat';

function Car(props) {
  return <h2>I am a {props.brand} car</h2>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Car brand="Tesla"/>
        <Car brand="Toyota" />
        <PercentageStat/>
      </header>
    </div>
  );
}

export default App;
