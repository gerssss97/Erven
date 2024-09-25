import React, {useState} from 'react';
import './Carrusel.css';
import './Carrusel.css'; 

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, content: "Carta 1" },
    { id: 2, content: "Carta 2" },
    { id: 3, content: "Carta 3" },
    { id: 4, content: "Carta 4" },
  ];
  const totalItems = items.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  // Calcular los índices de las cartas que se mostrarán
  const leftIndex = (currentIndex - 1 + totalItems) % totalItems;
  const rightIndex = (currentIndex + 1) % totalItems;

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prevSlide}>❮</button>
      <div className="carousel-container">
        <div className={`card left`} key={items[leftIndex].id}>
          {items[leftIndex].content}
        </div>
        <div className={`card active`} key={items[currentIndex].id}>
          {items[currentIndex].content}
        </div>
        <div className={`card right`} key={items[rightIndex].id}>
          {items[rightIndex].content}
        </div>
      </div>
      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
  );
};


export default Carrusel;

