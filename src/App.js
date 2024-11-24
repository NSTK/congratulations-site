import React, { useState } from "react";
import './App.css';

function App() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="app-container">
      <div className="main-section">
        <h1>С Днем Рождения!</h1>
        <p>Желаю сходить на концерт ГУФА!</p>
        <button className="btn" onClick={handleToggle}>
          {showMore ? "Скрыть поздравление" : "Нажми на меня"}
        </button>
        {showMore && (
          <div className="extra-section">
            <p>
              Пусть каждый день приносит новые радости, теплые встречи и вдохновление!
            </p>
            <p>Ты заслуживаешь самого лучшего</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;