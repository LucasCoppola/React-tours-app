import React, { useState, useEffect } from 'react';
import Tour from './Tour';
import './style.css';
// const url = 'https://course-api.com/react-tours-project';

const App = () => {
  return (
    <>
      <h1>Our Tours</h1>
      <div className="title-underline"></div>
      <div className="tours">
        <Tour />
        <Tour />
        <Tour />
        <Tour />
        <Tour />
      </div>
    </>
  );
};

export default App;
