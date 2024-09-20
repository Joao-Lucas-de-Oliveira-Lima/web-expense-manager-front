// src/components/ExpenseList.jsx
import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button, Typography, Box } from '@mui/material';

const ExpenseList = ({ expenses, onRemoveExpense }) => {
  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.value), 0);

  return (
    <Box>
      {/* Limitando a altura da lista e permitindo a rolagem */}
      <Box sx={{ maxHeight: '300px', overflowY: 'auto', mb: 2 }}>
        <List>
          {expenses.map((expense, index) => (
            <ListItem
              key={index}
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <ListItemText
                primary={
                  <Typography sx={{ color: 'black' }}>{`${expense.name} - R$ ${expense.value}`}</Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ color: 'black' }}>{`Data: ${expense.date}`}</Typography>
                }
              />
              <ListItemSecondaryAction>
                <Button variant="outlined" color="secondary" onClick={() => onRemoveExpense(index)}>
                  Remover
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
      <Typography variant="h6" component="div" sx={{ color: 'black' }}>
        Total: R$ {total.toFixed(2)}
      </Typography>
    </Box>
  );
};

export default ExpenseList;
