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
      <button className="button ms-3" onClick={addCounter}>계수기 추가</button>
      <ul>
        {counters.map(counter => {
          // counter <id> : <value> <button>
          return (
            <li key={counter.id}>
              counter {counter.id} : {counter.value}
              <button className='button ms-3' 
                      onClick={() => {incCount(counter.id) }}>
                증가</button>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default App

