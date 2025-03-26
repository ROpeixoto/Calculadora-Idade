import React, { useState } from "react";
import AgeDisplay from "./AgeDisplay";

const AgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: "--", months: "--", days: "--"});

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(year, month - 1, day);

    // Verifica se todos os campos estão preenchidos
    if (!day || !month || !year) {
      alert("Please, fill all the fields");
      return;
    }

    if(day > 31 || day < 1){
      alert("Enter a valid day");
      return;
    }

    if(month < 1 || month > 12){
      alert("Enter a valid month");
      return;
    }

    
    if((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)){
      if (month == 2 && day > 29){
        alert("Enter a valid day (Leap Year))");
        return;
      }
    } else{
       if (month == 2 && day > 28){
        alert("Enter a valid day");
        return;
      }
    }
  

    if(year > today.getFullYear()){
      alert("You were not even born yet")
      return
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
          <label for="day">DAY</label>
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
          <label for="month" id="label-month">MONTH</label>
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
          <label for="year"  id="label-year">YEAR</label>
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
        <button onClick={calculateAge}></button>
      </div>


      <AgeDisplay age={age} />
    </div>
  );
};

export default AgeCalculator;
