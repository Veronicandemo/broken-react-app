import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [background, setBackground] = useState(true)
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [error, setError] = useState(null)
  const toggleBackground = () => {
    setBackground((prev) => !prev)
  }

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 2)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    if (inputValue.trim() === '') {
      setShowMessage(true)
    } else {
      setShowMessage(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim() !== '') {
      console.log('Submitted:', inputValue)
      setShowMessage(false)

      setShowModal(true)
      setError(null)
      setInputValue('')
    } else {
      setShowMessage(true)
      console.log('Setting error message')
      setError('Please enter something before submitting!')
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div
      className="container"
      style={{ background: background ? 'white' : 'lightgrey' }}
    >
      <h1 className="title">React App</h1>

      <button className="toggle-btn" onClick={toggleBackground}>
        Toggle Background
      </button>

      <p className="counter">Counter: {counter}</p>
      <button className="increment-btn" onClick={incrementCounter}>
        Increment Counter
      </button>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      {showMessage && <p className="error-message">{error}</p>}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Thanks for submitting your response!</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
