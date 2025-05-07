import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    text: "",
    checkbox: false,
    radio: "",
    select: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, text: e.target.value });
  }

  return (
    <div className='form-container'>
      <h1>폼 자료</h1>
      <form>
        {/* 텍스트 입력 */}
        <div className='form-field'>
          <label>텍스트 : 
            <input type="text" name="text"
              value={formData.text}
              onChange={handleChange}>
            </input>
          </label>
        </div>
        {/* 첵크 상자 */}
        <div className='form-field'>
          <label>
            <input type="checkbox" name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}>
            </input>
            : 첵크상자
          </label>
        </div>
      </form>
    </div>
  )
}

export default App

