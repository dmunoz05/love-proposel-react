import { useState, useEffect } from 'react';
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from 'react-confetti';
import './App.css';

function ShowConfeti() {
  const { width, height } = useWindowSize();
  return (
    <Confetti width={width} height={height} />
  );
}

function App() {
  const [activeConfeti, setActiveConfeti] = useState(false);
  const [countAttempts, setCountAttemps] = useState(0);
  const [showBtnNot, setShowBtnNot] = useState(false);
  const [showBtnYes, setShowBtnYes] = useState(false);
  const [displayText, setDisplayText] = useState('');




  const accepted = () => {
    setActiveConfeti(true);
    setShowBtnNot(false);
    setShowBtnYes(false);
    corone();
  }

  const validateLimitWitdh = (current, newX) => {
    let positions = validatePosition(current);

    if (newX > positions.left) {
      return positions.left + (newX - positions.left) / 2;
    }
    return Math.min(window.innerWidth - 10, Math.max(0, newX));
  };

  const validateLimitHeight = (current, newY) => {

    let positions = validatePosition(current);

    if (newY > positions.top) {
      return positions.top + (newY - positions.top) / 2;
    }
    return Math.min(window.innerWidth - 10, Math.max(0, newY));
  };

  const validatePosition = (element) => {
    // Obtener las dimensiones del viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Obtener las dimensiones y la posición del elemento
    const rect = element.getBoundingClientRect();
    const { left, top, width, height } = rect;

    // Calcular las coordenadas validadas
    const validLeft = Math.min(viewportWidth - width, Math.max(0, left));
    const validTop = Math.min(viewportHeight - height, Math.max(0, top));

    return { left: validLeft, top: validTop };
  };


  const movePositionButton = (button) => {
    button.target.style.position = 'absolute';

    // Calcular nueva posición aleatoria
    let randomLeft = Math.round(Math.random() * (window.innerWidth - 10));
    let randomTop = Math.round(Math.random() * (window.innerHeight - 10));

    let x = validateLimitWitdh(button.target, randomLeft);
    let y = validateLimitHeight(button.target, randomTop);

    // Actualizar las coordenadas validadas
    button.target.style.left = `${x}px`;
    button.target.style.top = `${y}px`;

    setCountAttemps(countAttempts + 1);
  };

  function renderText(text, interval, timeout, next) {
    const originalText = text;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(originalText.substring(0, currentIndex + 1));

      currentIndex++;

      if (currentIndex > originalText.length) {
        clearInterval(intervalId);

        setTimeout(() => {
          next != undefined ? next() : null;
        }, timeout)
      }
    }, interval);
  }

  function end() { 
    return;
  }

  function corone() {
    renderText('¡Ahora somos novios 💖🥳!', 300, 1500, end);
  }

  function showBtns() {
    setShowBtnYes(true);
    setShowBtnNot(true);
  }


  function tenText() { 
    renderText('¿Quieres ser mi novia?', 300, 1500, showBtns);
  }
  
  function nineText() { 
    renderText('Bueno.', 300, 1500, tenText)
  }

  function eightText() { 
    renderText('Si tu ...?', 300, 1500, nineText)
  }

  function seventText() { 
    renderText('¿Quie ...?', 300, 1500, eightText)
  }

  function sixthText() { 
    renderText('Eeeh, pues si tu ...', 300, 1500, seventText)
  }

  function fifthText() {
    renderText('Yo quería preguntarte si ...', 300, 2000, sixthText)
  }

  function fourthText() {
    renderText('Pero debo hacerte una pregunta 🤐', 300, 1500, fifthText)
  }

  function thirdText() {
    renderText('Yo se que no es la manera apropiada de hacerlo 😅', 300, 1500, fourthText)
  }

  function secondText() {
    renderText('Tengo algo importante que decirte 👀', 300, 1500, thirdText)
  }

  useEffect(() => {
    renderText('Hola', 400, 1500, secondText);
  }, []);


  return (
    <>
      <h1 className=' transition-all'>{displayText}</h1>
      <div className="card flex gap-2 justify-center">
        {showBtnYes ? (
          <button onClick={accepted}
            className="btnAccepted overflow-hidden w-32 p-2 h-12 outline-none bg-gray-800 text-white border-none rounded-full text-xl font-bold cursor-pointer relative z-9 group"
          >
            Si
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-pink-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-pink-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
            ></span>
            <span
              className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
            >Presiona</span>
          </button>) : null}

        {showBtnNot ? (
          <button onMouseDown={(e) => movePositionButton(e)} onMouseEnter={(e) => movePositionButton(e)} onClick={(e) => movePositionButton(e)}
            className='overflow-hidden outline-none w-32 p-2 h-12 bg-gray-800 text-white border-none rounded-full text-xl font-bold cursor-pointer relative z-10 group'>
            No
          </button>) : null}
      </div>
      {
        activeConfeti ? (
          <ShowConfeti />
        ) : null
      }
    </>
  );
}

export default App;
