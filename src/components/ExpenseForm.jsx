import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ExpenseForm = ({ onAddExpense }) => {
  // Inicializar os campos com valores padrão
  const [name, setName] = useState(''); // Padrão vazio
  const [date, setDate] = useState(''); // Padrão vazio
  const [value, setValue] = useState(''); // Padrão vazio

  const handleSubmit = (e) => {
    e.preventDefault();

    // Chama a função onAddExpense com um objeto que pode ter valores vazios
    onAddExpense({ name, date, value });
    
    // Limpar o formulário após a submissão
    setName('');
    setDate('');
    setValue('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Data"
        type="date"
        variant="outlined"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        sx={{
          '& input::-webkit-calendar-picker-indicator': {
            filter: 'invert(1)', // Torna o ícone preto
          },
        }}
      />
      <TextField
        label="Valor"
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        inputProps={{
          min: 0, // Define o valor mínimo como 0
        }}
      />
      <Button variant="contained" color="primary" type="submit">
        Adicionar Gasto
      </Button>
    </Box>
  );
};

export default ExpenseForm;
