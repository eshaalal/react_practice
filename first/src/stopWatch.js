import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Update time every 10ms
      }, 10);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    const minutes = ("0" + Math.floor(time / 60000)).slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.time}>{formatTime(time)}</h1>
      <div>
        <button onClick={startTimer} style={styles.button}>Start</button>
        <button onClick={stopTimer} style={styles.button}>Stop</button>
        <button onClick={resetTimer} style={styles.button}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
  time: {
    fontSize: "48px",
    fontFamily: "monospace",
  },
  button: {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Stopwatch;
