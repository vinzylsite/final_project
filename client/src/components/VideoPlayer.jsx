import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function VideoPlayer({ src, title }) {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          borderRadius: 2,
          border: '1px solid #7C4DFF',
          boxShadow: '0 0 13px rgba(255, 0, 255, 0.4), inset 0 0 20px rgba(124, 77, 255, 0.1)',
          mb: 2,
          backgroundColor: '#0A0E27',
        }}
      >
        <video
          width="100%"
          height="auto"
          controls
          src={src}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#0A0E27',
          }}
        >
          Your browser does not support the video tag.
        </video>
      </Box>
      <Typography
        variant="h5"
        sx={{
          color: '#E0E0FF',
          fontWeight: 600,
          paddingBottom: 2,
          mt: 1,
        }}
      >
        {title}
      </Typography>
      
    </Box>
  );
}

 
