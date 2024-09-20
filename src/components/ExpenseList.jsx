// src/components/ExpenseList.jsx
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
              primary={
                <Typography variant="body1" sx={{ color: 'black' }}>
                  {`${expense.name} - R$ ${expense.value}`}
                </Typography>
              }
              secondary={
                <Typography variant="body2" sx={{ color: 'black' }}>
                  {`Data: ${expense.date}`}
                </Typography>
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
    </div>
  );
};

export default ExpenseList;
