import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
