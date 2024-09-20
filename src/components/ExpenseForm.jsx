// src/components/ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && value) {
      onAddExpense({ name, date, value });
      setName('');
      setDate('');
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Data:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Valor:</label>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <button type="submit">Adicionar Gasto</button>
    </form>
  );
};

export default ExpenseForm;
