// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
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

  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.value), 0);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        pt: 4,
      }}
    >
      <Box
        sx={{
          border: '2px solid #3f51b5',
          borderRadius: '8px',
          padding: 3,
          boxShadow: 2,
          backgroundColor: '#fff',
          width: '100%',
          maxHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            color: 'black',
            textAlign: 'center', // Centraliza o título no Box
          }}
        >
          Registro de Gastos
        </Typography>

        {/* Formulário */}
        <ExpenseForm onAddExpense={addExpense} />

        {/* Lista de Gastos com Scroll */}
        <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
          <ExpenseList expenses={expenses} onRemoveExpense={removeExpense} />
        </Box>

        {/* Valor Total fixo na parte inferior */}
        <Box sx={{ borderTop: '1px solid #ccc', paddingTop: 2 }}>
          <Typography variant="h6" component="div" sx={{ textAlign: 'right', color: 'black' }}>
            Total: R$ {total.toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
