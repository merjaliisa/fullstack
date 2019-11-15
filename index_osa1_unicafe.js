import React, { useState } from "react";
import ReactDOM from "react-dom";
// fullstack osa1 unicafe 1.6-1.10 step1 - 5
// tänne 1.10 lopullinen!
const Statistics = props => {
  console.log(props);

  if (props.value === 0 || Number.isNaN(props.value) === true) {
    return <div>{props.text} No feedback given</div>;
  }
  return (
    <p>
      {props.text} {props.value} {props.muu}
    </p>
  );
};

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const otsikko = "Give feedback";
  function Header() {
    return <h1>{otsikko}</h1>;
  }
  const otsikko2 = "Statistics";
  function Total() {
    return <h1>{otsikko2}</h1>;
  }

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + bad + neutral;
  const ave = (good - bad) / all;
  const pos = (good / all) * 100;

  return (
    <div>
      <Header otsikko={otsikko} />
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <Total otsikko2={otsikko2} />
      <div>
        <Statistics text="good" value={good} />
        <Statistics text="neutral" value={neutral} />
        <Statistics text="bad" value={bad} />
        <Statistics text="all" value={all} />
        <Statistics text="averge" value={ave} />
        <Statistics text="positive" value={pos} muu={"%"} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
