import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categories = [
  'All',
  'Music',
  'Gaming',
  'News',
  'Sports',
  'Education',
  'Comedy',
  'Technology',
];

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate();

  const handleClick = (category) => {
    // navigate to search page with category filter
    navigate(`/search?category=${encodeURIComponent(category)}`);
    if (onClose) onClose();
  };

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
    >
      <Toolbar />
      <List sx={{ width: 250 }}>
        {categories.map((cat) => (
          <ListItem key={cat} disablePadding>
            <ListItemButton onClick={() => handleClick(cat)}>
              <ListItemText primary={cat} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
 
