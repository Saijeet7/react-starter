import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Iphone",
      amount: "1000",
      date: new Date(2020, 7, 1),
    },
    {
      id: "e2",
      title: "Macbook",
      amount: "1200",
      date: new Date(2023, 9, 10),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
