import React, { useEffect, useState } from 'react';
import s from './colorGame.module.css';

const Color = () => {
  const colors = [
    'Crimson',
    'LimeGreen',
    'DeepPink',
    'Gold',
    'Indigo',
    'Maroon',
    'SkyBlue',
    'Aqua',
    'Seashell',
  ];
  const [score, setScore] = useState(0);
  const [currentColor, setCurrentColor] = useState('');
  const [message, setMessage] = useState('-----');
  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setCurrentColor(randomColor);
  };
  const clickColor = (selectedColor) => {
    if (selectedColor === currentColor) {
      setScore(score + 1);
      setMessage('Правильно');
      generateRandomColor();
    } else {
      setScore(score - 1);
      setMessage('Неправильно');
    }
  };
  const reset = () => {
    setScore(0);
    setMessage('');
  };
  useEffect(() => {
    generateRandomColor();
  }, []);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Цветной выбор</h1>
        <p>Выберите цвет, соответствующий текущему цвету:</p>
      </div>
      <div
        className={s.colorBox}
        style={{
          backgroundColor: currentColor,
          width: '400px',
          height: '250px',
          border: '3px solid black',
        }}></div>
      <div className={s.message}>
        {message}
        <p>Счет: {score}</p>
        <button onClick={reset}>Сбросить</button>
      </div>
      <div className={s.buttonContainer}>
        {colors.map((color) => (
          <button className={s.button} key={color} onClick={() => clickColor(color)}>
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Color;
