import React from 'react';

const Tour = () => {
  return (
    <div className="single-tour">
      <img className="tour-img" src="https://images2.imgbox.com/d6/91/DLtwCiTn_o.jpg" />
      <span className="tour-price">$1,995</span>
      <div className="tour-info">
        <h5>Best Of Paris In 7 Days Tour</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          voluptates totam et sed ea, aperiam distinctio, dicta dolore
          temporibus quos perspiciatis veniam quod. Corporis libero blanditiis
          illo placeat minus consequuntur.
          <button className="show-info">Read more</button>
        </p>
      </div>
      <button>Not Interested</button>
    </div>
  );
};

export default Tour;
