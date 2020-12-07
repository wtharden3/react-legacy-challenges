import React from 'react';

const CatList = props => {
  return (
    <div>
      {props.cats.map((cat, index) => (
        <li key={index}>{cat}</li>
      ))}
    </div>
  );
};

export default CatList;
