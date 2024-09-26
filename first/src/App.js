// App.js

// import React from 'react';
// import Navbar from './Navbar';
// import PercentageStat from './PercentageStat';
// import Card from './Card';

// function Car(props) {
//   return <h2>I am a {props.brand} car</h2>;
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar/>
//         {/* <Car brand="Tesla"/>
//         <Car brand="Toyota" />
//         <PercentageStat/> */}
//         <Card>
//           <h2>Title</h2>
//           <p>Description</p>
//           </Card>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js
import React, { useState, useEffect, useContext } from 'react';
import ThemeContext, { ThemeProvider } from './ThemeContext';
import './App.css';

const App = () => {
  // Counter state
  const [counter, setCounter] = useState(0);

  // Access theme context
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Log counter changes
  useEffect(() => {
    console.log(`Counter value changed: ${counter}`);
  }, [counter]);

  return (
    <div className={`app ${theme}`}>
      <h1>Counter App with Theme Switcher</h1>
      <div className="counter">
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <span>{counter}</span>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <div className="theme-switcher">
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    </div>
  );
};

// Wrap App component with ThemeProvider
const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper;

