import { Typography, Box, Button } from '@mui/material';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  return (
    <Box>
      <Typography variant="h4">Profile</Typography>
      {user ? (
        <>
          <Typography>Username: {user.name}</Typography>
          <Button onClick={logout}>Logout</Button>
        </>
      ) : (
        <Typography>You are not logged in.</Typography>
      )}
    </Box>
  );
}
 
