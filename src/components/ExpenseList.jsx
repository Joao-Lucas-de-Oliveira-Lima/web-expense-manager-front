// src/components/ExpenseList.jsx
import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@mui/material';

const ExpenseList = ({ expenses, onRemoveExpense }) => {
  return (
    <List>
      {expenses.map((expense, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`${expense.name} - R$ ${expense.value}`}
            secondary={`Data: ${expense.date}`}
          />
          <ListItemSecondaryAction>
            <Button variant="outlined" color="secondary" onClick={() => onRemoveExpense(index)}>
              Remover
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ExpenseList;
