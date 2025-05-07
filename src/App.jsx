import { useState } from 'react';
import './App.css';

function App() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  return (
    <>
      <h1>계수기</h1>
    </>
  )
}

export default App

