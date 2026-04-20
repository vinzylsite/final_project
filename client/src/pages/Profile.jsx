import { useState, useRef, useEffect, useContext } from 'react';
import { Box, Typography, Button, Container, Paper, Avatar } from '@mui/material';
import AuthContext from '../context/AuthContext';

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (profileImage) {
        URL.revokeObjectURL(profileImage);
      }
    };
  }, [profileImage]);

  const handlePictureChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (profileImage) {
        URL.revokeObjectURL(profileImage);
      }
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSelectPicture = () => {
    fileInputRef.current?.click();
  };

  const avatarContent = profileImage ? (
    <Avatar
      src={profileImage}
      alt="Profile"
      sx={{
        width: 120,
        height: 120,
        boxShadow: '0 0 24px rgba(124, 77, 255, 0.35)',
      }}
    />
  ) : (
    <Avatar
      sx={{
        width: 120,
        height: 120,
        bgcolor: '#7C4DFF',
        color: '#FFFFFF',
        fontSize: '2.5rem',
        boxShadow: '0 0 24px rgba(124, 77, 255, 0.35)',
      }}
    >
      {user?.name?.charAt(0).toUpperCase() || 'U'}
    </Avatar>
  );

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #1A1F3A 0%, #2D1B69 100%)',
          borderRadius: 2,
          p: 4,
          boxShadow: '0 0 13px rgba(0, 0, 0, 0.42), inset 0 0 20px rgba(124, 77, 255, 0.1)',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 3 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: '#ffffff',
              textShadow: 'none',
              textAlign: 'center',
              letterSpacing: 2,
            }}
          >
            PROFILE
          </Typography>
          {avatarContent}
          <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 700, letterSpacing: 1.5 }}>
            {user?.name || 'Guest'}
          </Typography>
          <Typography variant="body2" sx={{ color: '#A0A0E0', textAlign: 'center' }}>
            Update your profile picture and account settings.
          </Typography>
        </Box>

        {user ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleSelectPicture}
              sx={{
                background: 'linear-gradient(135deg, #7C4DFF 0%, #9C27B0 100%)',
                color: '#ffffff',
                fontWeight: 700,
                py: 1.5,
                '&:hover': {
                  boxShadow: '0 0 13px rgba(124, 77, 255, 0.8)',
                },
              }}
            >
              Change Profile Picture
            </Button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handlePictureChange}
              style={{ display: 'none' }}
            />
            <Button
              variant="contained"
              onClick={logout}
              sx={{
                background: 'linear-gradient(135deg, #FF00FF 0%, #7C4DFF 100%)',
                color: '#ffffff',
                fontWeight: 700,
                py: 1.5,
                '&:hover': {
                  boxShadow: '0 0 13px rgba(255, 0, 255, 0.8)',
                },
              }}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Typography sx={{ color: '#A0A0E0', textAlign: 'center', mt: 4 }}>
            You are not logged in.
          </Typography>
        )}
      </Paper>
    </Container>
  );
}
 
