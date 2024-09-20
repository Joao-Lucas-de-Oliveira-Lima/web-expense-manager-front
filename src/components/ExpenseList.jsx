import React from 'react';
import { List, ListItem, ListItemText, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ExpenseList = ({ expenses, onRemoveExpense }) => {
  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.value), 0);

  return (
    <div>
      <List>
        {expenses.map((expense, index) => (
          <ListItem 
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: '100%',
            }}
          >
            <ListItemText
              primary={
                <Tooltip title={expense.name} arrow>
                  <span
                    style={{
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      display: 'inline-block',
                      maxWidth: '70%',
                      cursor: 'pointer',
                    }}
                  >
                    {expense.name.length > 50 ? `${expense.name.slice(0, 40)}...` : expense.name}
                  </span>
                </Tooltip>
              }
              secondary={`R$ ${parseFloat(expense.value).toFixed(2)} - ${expense.date}`}
              sx={{ color: 'black' }}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => onRemoveExpense(index)}>
              <DeleteIcon
                sx={{
                  cursor: 'pointer',
                  color: 'black',
                  '&:hover': {
                    color: 'red',
                  },
                }}
              />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ExpenseList;
