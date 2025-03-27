import React from "react";

const AgeDisplay = ({ age }) => {
  return (
    <div class="visor">
      <p>
        <span class="datas">{age.years}</span> <span class="textos">years</span>
      </p>
      <p>
        <span class="datas">{age.months}</span>{" "}
        <span class="textos">months</span>
      </p>
      <p>
        <span class="datas">{age.days}</span> <span class="textos">days</span>
      </p>
    </div>
  );
};

export default AgeDisplay;
