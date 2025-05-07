import { useState } from 'react';
import './App.css';

function App() {
  const [sheepCount, setsheepCount] = useState(0);
  const [step, setStep] = useState(1);
  const incSheepCount = () => {
    setsheepCount(sheepCount + step);
  }
  const incSheepByTwo = () => {
    setsheepCount(10);
    setsheepCount(s => s + step);
  }
  const decSheepCount = () => {
    setsheepCount(sheepCount - step);
  }
  const changeStep = (e) => {
    setStep(parseInt(e.target.value));
  }

  return (
    <>
      <h1>안녕?</h1>
    </>
  )
}

export default App

