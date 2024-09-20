// src/components/ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses, onRemoveExpense }) => {
  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.value), 0);

  return (
    <div>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name} - {expense.date} - R$ {expense.value}
            <button onClick={() => onRemoveExpense(index)}>Remover</button>
          </li>
        ))}
      </ul>
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
};

export default ExpenseList;