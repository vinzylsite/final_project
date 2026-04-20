import { Box, TextField, Button, Typography, Container, Paper } from '@mui/material';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Register() {
  const [username, setUsername] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // registration placeholder just logs in
    login(username);
    navigate('/');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper
        elevation={0}
        sx={{
          background: `linear-gradient(135deg, #1A1F3A 0%, #2D1B69 100%)`,
          borderRadius: 2,
          p: 4,
          boxShadow: '0 0 13px rgba(0, 0, 0, 0.42), inset 0 0 20px rgba(124, 77, 255, 0.1)',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 1,
            fontWeight: 800,
            color: '#ffffff',
            textShadow: 'none',
            textAlign: 'center',
            letterSpacing: 2,
          }}
        >
          REGISTER
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: '#A0A0E0',
            textAlign: 'center',
            letterSpacing: 1,
          }}
        >
          Create your CloneTube account
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderColor: '#7C4DFF',
                '&:hover': {
                  boxShadow: '0 0 10px rgba(255, 0, 255, 0.3)',
                },
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              background: `linear-gradient(135deg, #FF00FF 0%, #7C4DFF 100%)`,
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1.1rem',
              py: 1.5,
              '&:hover': {
                boxShadow: '0 0 13px rgba(255, 0, 255, 0.8)',
              },
            }}
          >
            Register
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            mt: 3,
            textAlign: 'center',
            color: '#A0A0E0',
          }}
        >
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#ffffff', fontWeight: 600 }}>
            Sign In
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}
 
