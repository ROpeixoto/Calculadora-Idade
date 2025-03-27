import React from 'react';


function ButtonCalculate({calculateAge}) {
  return (
        <button className="purple" onClick={calculateAge}></button>
  );
}

export default ButtonCalculate;