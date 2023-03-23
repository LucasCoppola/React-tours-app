import React, { useState } from 'react';

const Tour = ({ src, price, title, description, handleClick }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="single-tour">
      <img className="tour-img" src={src} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{title}</h5>
        <p>
          {hidden ? `${description.substring(0, 200)}...` : description}
          <button className="show-info" onClick={() => setHidden(!hidden)}>
            {hidden ? 'Read more' : 'Read less'}
          </button>
        </p>
      </div>
      <button className="delete-btn" onClick={handleClick}>
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
