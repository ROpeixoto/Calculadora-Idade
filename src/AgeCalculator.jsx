import React, { useState } from "react";
import AgeDisplay from "./AgeDisplay";

const AgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(year, month - 1, day);

    // Verifica se todos os campos estão preenchidos
    if (!day || !month || !year) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();

    if (days < 0) {
      months--;
      days =
        days + new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months = months + 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div class="interface">
      <div class="inserir">
        <div class="data" id="dia">
          <label htmlFor="day">Dia</label>
          <input
            id="day"
            type="number"
            min="1"
            max="31"
            placeholder="DD"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        {/* Campo Mês */}
        <div class="data">
          <label htmlFor="month">Mês</label>
          <input
            id="month"
            type="number"
            min="1"
            max="12"
            placeholder="MM"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>

        {/* Campo Ano */}
        <div class="data">
          <label htmlFor="year">Ano</label>
          <input
            id="year"
            type="number"
            min="1900"
            max={new Date().getFullYear()}
            placeholder="AAAA"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button onClick={calculateAge}>Calcular Idade</button>
      </div>


      <AgeDisplay age={age} />
    </div>
  );
};

export default AgeCalculator;
