import React, { useState } from 'react';
import Confetti from "react-confetti";
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app-container">
      <h1>С Днем Рождения!</h1>
      {isOpen && <Confetti numberOfPieces={300} />}
      <div className={`envelope ${isOpen ? 'open' : 'closed'}`} onClick={toggleEnvelope}>
        <div className="flap top"></div>
        <div className="flap bottom">Открыть</div>
        <div className="body">
          <p className={`message ${isOpen ? 'show' : 'hide'}`}>
            Пусть каждый день будет полон радости, тепла и вдохновения!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
