import React from 'react';

const Star = ({ isFilled, onClick , numero = 1, color = '#fff'}) => {
  return (
    <span onClick={onClick} className={`star ${isFilled ? 'filled' : 'unfilled'}`}>
      {numero === 1 && <span  style={{color:color}}>★</span>}
      {numero === 2 && <span style={{color:color}}>★★</span>}
      {numero === 3 && <span style={{color:color}}>★★★</span>}
      {numero === 4 && <span style={{color:color}}>★★★★</span>}
      {numero === 5 && <span style={{color:color}}>★★★★★</span>}
     
      
    </span>
  );
};

export default Star;