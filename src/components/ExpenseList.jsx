import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
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
              overflow: 'hidden', // Previne o scroll horizontal
              whiteSpace: 'nowrap', // Impede quebra de linha
              textOverflow: 'ellipsis', // Adiciona "..." quando o texto é muito longo
              maxWidth: '100%' // Limita a largura máxima do item
            }}
          >
            <ListItemText
              primary={expense.name}
              secondary={`R$ ${parseFloat(expense.value).toFixed(2)} - ${expense.date}`}
              sx={{ color: 'black' }} // Define a cor do texto como preto
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => onRemoveExpense(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ExpenseList;
