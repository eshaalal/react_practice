import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function TemperatureConverter() {
  // State variables to hold input values and history
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [history, setHistory] = useState([]);

  // Function to convert Celsius to Fahrenheit
  const convertToFahrenheit = (celsiusValue) => (celsiusValue * 9) / 5 + 32;

  // Function to convert Fahrenheit to Celsius
  const convertToCelsius = (fahrenheitValue) => ((fahrenheitValue - 32) * 5) / 9;

  // Handle change in Celsius input
  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    const fahrenheitValue = convertToFahrenheit(celsiusValue);
    setFahrenheit(fahrenheitValue);

    // Update conversion history
    const newHistory = [...history, `${celsiusValue}°C = ${fahrenheitValue.toFixed(2)}°F`];
    setHistory(newHistory);
  };

  // Handle change in Fahrenheit input
  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    const celsiusValue = convertToCelsius(fahrenheitValue);
    setCelsius(celsiusValue);

    // Update conversion history
    const newHistory = [...history, `${celsiusValue.toFixed(2)}°C = ${fahrenheitValue}°F`];
    setHistory(newHistory);
  };

  // Function to clear history
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      flexDirection: 'column',
      textAlign: 'center'
    }}>
      <h1>Temperature Converter</h1>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <label>
          Celsius:
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Enter Celsius"
            style={{ marginLeft: '10px' }}
          />
        </label>
        
        <label>
          Fahrenheit:
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Enter Fahrenheit"
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <h2>Conversion History</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>

      <button onClick={clearHistory} style={{ marginTop: '15px' }}>Clear History</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <TemperatureConverter />
    </div>
  );
}

// Render the App component
ReactDOM.render(<App />, document.getElementById('root'));

export default TemperatureConverter;
