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
      <h1>Нажмите на квадрат</h1>
      {isOpen && <Confetti numberOfPieces={1500} />}
      <div className={`envelope ${isOpen ? 'open' : 'closed'}`} onClick={toggleEnvelope}>
        <div className="flap top"></div>
        <div className="flap bottom"></div>
        <div className="body">
          <p className={`message ${isOpen ? "show" : "hide"}`}>
            С Днем Рождения МАМА джан! Мы тебя очень любим ❤️
          </p>
          {isOpen && (
            <img
              src={process.env.PUBLIC_URL + "/images/photo.jpg"}
              alt="Поздравление"
              className="congratulation-photo"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
