import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button, Typography } from '@mui/material';

const ExpenseList = ({ expenses, onRemoveExpense }) => {
  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.value), 0);

  return (
    <div>
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
      <Typography variant="h6" component="div">
        Total: R$ {total.toFixed(2)}
      </Typography>
    </div>
  );
};

export default ExpenseList;