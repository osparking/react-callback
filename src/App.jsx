import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    text: "",
    checkbox: false,
    radio: "",
    select: ""
  })
  return (
    <div>
      <h1>좋은 날!</h1>
    </div>
  )
}

export default App

