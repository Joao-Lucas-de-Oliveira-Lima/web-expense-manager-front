// src/App.js
import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  return (
    <div>
      <h1>Registro de Gastos</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onRemoveExpense={removeExpense} />
    </div>
  );
};

export default App;
