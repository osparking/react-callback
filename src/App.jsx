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
    <div className='form-container'>
      <h1>폼 자료</h1>
      <form>
        {/* 텍스트 입력 */}
        {/* 첵크 상자 */}
      </form>
    </div>
  )
}

export default App

