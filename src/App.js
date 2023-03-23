import React, { useState, useEffect } from 'react';
import Tour from './Tour';
import './style.css';
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);

  function deleteTour(id) {
    setTours(tours.filter((tour) => tour.id !== id));
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  const renderTours = tours.map((tour) => (
    <Tour
      key={tour.id}
      handleClick={() => deleteTour(tour.id)}
      src={tour.image}
      price={tour.price}
      title={tour.name}
      description={tour.info}
    />
  ));

  return (
    <>
      <h1>Our Tours</h1>
      <div className="title-underline"></div>
      <div className="tours">{renderTours}</div>
    </>
  );
};

export default App;
