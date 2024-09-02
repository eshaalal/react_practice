// App.js

import React from 'react';
import Navbar from './Navbar';

function Car(props) {
  return <h2>I am a {props.brand} car</h2>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Car brand="Tesla" />
        <Car brand="Toyota" />
      </header>
    </div>
  );
}

export default App;
