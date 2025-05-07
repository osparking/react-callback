import { useState } from 'react';
import './App.css';

function App() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);
  const addCounter = () => {
    setCounters([...counters, { id: counters.length + 1, value: 0 }]);
  }

  return (
    <>
      <h1>계수기</h1>
      <button onClick={addCounter}>계수기 추가</button>
    </>
  )
}

export default App

