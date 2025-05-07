import React, { useState } from 'react';
import './App.css';

function App() {
const [colors] = useState(
  ['#ffffcc', '#33ccff', '#66ff66', '#ffcc66', '#ff66ff']);

  return (
    <div className='form-container'>
      <h1>색 선택기</h1>
    </div>
  )
}

export default App

