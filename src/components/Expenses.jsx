import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
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
  );
};

export default Expenses;