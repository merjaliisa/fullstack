import React from "react";
import ReactDOM from "react-dom";
// Header huolehtii kurssin nimen renderöimisestä
// Content osista ja niiden tehtävämääristä
// Total tehtävien yhteismäärästä

const App = () => {
  const Header = props => {
    console.log(props);
    return <h1>{props.course}</h1>;
  };
  const Content = props => {
    return (
      <div>
        <Part part="Fundamentals of React" exerc="10" />
        <Part part="Using props to pass data" exerc="7" />
        <Part part="State of a component" exerc="14" />
      </div>
    );
  };
  const Part = props => {
    return <p>{props.part}</p>;
  };
  const Total = props => {
    return (
      <p>
        {props.total} {props.number}
      </p>
    );
  };
  return (
    <div>
      <Header course="Half Stack application development" />
      <Content part />
      <Total total="Number of exercises" number={10 + 7 + 14} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
