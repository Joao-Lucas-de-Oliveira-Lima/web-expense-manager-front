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
      {/* Definindo altura máxima e rolagem para o contêiner do formulário e lista */}
      <Box
        sx={{
          border: '2px solid #3f51b5',
          borderRadius: '8px',
          padding: 3,
          boxShadow: 2,
          backgroundColor: '#fff',
          width: '100%',
          maxHeight: '500px',  // Altura máxima do contêiner
          overflowY: 'auto',   // Barra de rolagem quando o conteúdo excede a altura
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'black' }}>
          Gerenciador de gastos
        </Typography>
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} onRemoveExpense={removeExpense} />
      </Box>
    </Container>
  );
};

export default App;
