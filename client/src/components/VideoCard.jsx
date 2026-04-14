import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = () => {
    navigate(`/watch/${video.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        height: '100%',
        width: '15vw',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(124, 77, 255, 0.1) 100%)`,
        border: `1px solid rgba(124, 77, 255, 0.3)`,
        '&:hover': {
          boxShadow: `0 0 13px rgba(255, 0, 255, 0.6), 0 0 50px rgba(124, 77, 255, 0.3), inset 0 0 20px rgba(124, 77, 255, 0.1)`,
          borderColor: '#FF00FF',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'rgba(124, 77, 255, 0.1)',
          height: 180,
        }}
      >
         <CardMedia
          component="img"
          image={video.thumbnail}
          alt={video.title}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.3s ease',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

        <CardMedia
            component="video"
            src={video.src}
            muted
            loop
            playsInline
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              opacity: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 2,
              '&:hover': {
                opacity: 1,
              },
            }}
          />

        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(255, 0, 255, 0.9)',
            color: '#ffffff',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            boxShadow: '0 0 10px rgba(255, 0, 255, 0.8)',
          }}
        >
          Trending
        </Box>
      </Box>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 0,
        }}
      >
        <div>
          <Typography
            variant="subtitle1"
            noWrap
            sx={{
              fontWeight: 600,
              color: '#E0E0FF',
              '&:hover': {
                color: '#FF00FF',
              },
            }}
          >
            {video.title}
          </Typography>
          <Typography
            variant="body2"
            noWrap
            sx={{
              color: '#A0A0E0',
              mt: 0.5,
            }}
          >
            {video.channel}
          </Typography>
        </div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 1,
            fontSize: '0.75rem',
            color: '#A0A0E0',
          }}
        >
          <span>{video.views}</span>
          <span>{video.timestamp}</span>
        </Box>
      </CardContent>
    </Card>
  );
}
 

