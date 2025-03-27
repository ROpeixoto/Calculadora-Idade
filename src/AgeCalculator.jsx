import React, { useState } from "react";
import AgeDisplay from "./AgeDisplay";
import ButtonCalculate from "./ButtonCalculate";

const AgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    // verifica se todos os campos estão preenchidos
    if (!day || !month || !year) {
      alert("Please, fill all the fields");
      return;
    }

    if (
      (month == 4 || month == 6 || month == 9 || month == 11) &&
      (day > 30 || day < 1)
    ) {
      alert("Enter a valid day");
      return;
    }
    //verificando dias e meses
    else if (day > 31 || day < 1) {
      alert("Enter a valid day");
      return;
    }
    if (month < 1 || month > 12) {
      alert("Enter a valid month");
      return;
    }

    //verificando anos bissextos
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
      if (month == 2 && day > 29) {
        alert("Enter a valid day (Leap Year))");
        return;
      }
    } else {
      if (month == 2 && day > 28) {
        alert("Enter a valid day");
        return;
      }
    }

    //caso o usuaria insira uma data maior do que a de hoje
    if (today < birthDate) {
      alert("You were not even born yet");
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    //se o dia do mês atual for menor que o dia do mês do aniversariante, days será negativo
    //então iremos pegar o ultimo dia do mês anterior e somar com a diferença entre
    //o dia do mes atual e do aniversario
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
    <div className="interface">
      <div className="inserir">
        <div className="data" id="dia">
          <label for="day">DAY</label>
          <input
            className="insert-data"
            id="day"
            type="number"
            min="1"
            max="31"
            placeholder="DD"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <div className="data">
          <label for="month" id="label-month">
            MONTH
          </label>
          <input
            className="insert-data"
            id="month"
            type="number"
            min="1"
            max="12"
            placeholder="MM"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>

        <div className="data">
          <label for="year" id="label-year">
            YEAR
          </label>
          <input
            className="insert-data"
            id="year"
            type="number"
            min="100"
            max={new Date().getFullYear()}
            placeholder="YYYY"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <ButtonCalculate calculateAge={calculateAge} />
      </div>

      <AgeDisplay age={age} />
    </div>
  );
};

export default AgeCalculator;
