import { useState } from 'react';
import './App.css';

function App() {
  const [sheepCount, setsheepCount] = useState(0);
  const [step, setStep] = useState(1);
  const incSheepCount = () => {
    setsheepCount(sheepCount + step)
  }
  const decSheepCount = () => {
    setsheepCount(sheepCount - step)
  }
  const changeStep = (e) => {
    setStep(parseInt(e.target.value));
  }

  return (
    <>
      <h1>양 {sheepCount} 마리</h1>
      <input
        type="number"
        value={step}
        onChange={changeStep} />
      <h2><button onClick={incSheepCount}>증가</button></h2>
      <h2><button onClick={decSheepCount}>감소</button></h2>
    </>
  )
}

export default App

