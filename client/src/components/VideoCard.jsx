import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch/${video.id}`);
  };

  return (
    <Card onClick={handleClick} sx={{ cursor: 'pointer' }}>
      <CardMedia
        component="img"
        image={video.thumbnail}
        alt={video.title}
        sx={{ height: 180, objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="subtitle1" noWrap>
          {video.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {video.channel}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {video.views} · {video.timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}
 
