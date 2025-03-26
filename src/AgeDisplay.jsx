import React from 'react';
import './styles.css';

const AgeDisplay = ({ age }) => {
  return (
    <div class="visor">

      <p><span class="datas">{age.years}</span> <span class="textos">Anos</span></p>
      <p><span class="datas">{age.months}</span> <span class="textos">Meses</span></p>
      <p><span class="datas">{age.days}</span> <span class="textos">Anos</span></p>

    </div>
  );
};

export default AgeDisplay;