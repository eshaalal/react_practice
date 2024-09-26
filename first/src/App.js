// App.js

import React from 'react';
import Navbar from './Navbar';
import PercentageStat from './PercentageStat';
import Card from './Card';

function Car(props) {
  return <h2>I am a {props.brand} car</h2>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* <Car brand="Tesla"/>
        <Car brand="Toyota" />
        <PercentageStat/> */}
        <Card>
          <h2>Title</h2>
          <p>Description</p>
          </Card>
      </header>
    </div>
  );
}

export default App;
