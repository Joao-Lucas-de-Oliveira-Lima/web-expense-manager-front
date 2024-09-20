import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(''); 
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    onAddExpense({ name, date, value });
    if (name && date && value >= 0) {
      setName('');
      setDate('');
      setValue('');
    } else {
      console.log('Preencha todos os campos corretamente.');
    }
  };

  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ name, date, value });
    setName('');
    setDate('');
    setValue('');
  };
  */

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
        slotProps={{
          inputLabel: {
            shrink: date !== 'data',
          },
        }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        sx={{
          '& input::-webkit-calendar-picker-indicator': {
            filter: 'invert(1)',
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
          min: 0,
        }}
      />
      <Button variant="contained" color="primary" type="submit">
        Adicionar Gasto
      </Button>
    </Box>
  );
};

export default ExpenseForm;
