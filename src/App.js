import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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
    date: new Date(2020, 9, 10),
  },
  {
    id: "e3",
    title: "Airpods",
    amount: "100",
    date: new Date(2020, 9, 10),
  },
  {
    id: "e2",
    title: "Macbook Pro",
    amount: "1500",
    date: new Date(2022, 7, 12),
  },
  {
    id: "e2",
    title: "Macbook Air",
    amount: "1100",
    date: new Date(2021, 12, 11),
  },
  {
    id: "e2",
    title: "Mac Mini",
    amount: "800",
    date: new Date(2019, 9, 6),
  },
  {
    id: "e2",
    title: "Ipad Pro",
    amount: "1800",
    date: new Date(2022, 9, 7),
  },
  {
    id: "e2",
    title: "Apple Pencil",
    amount: "200",
    date: new Date(2022, 3, 12),
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
