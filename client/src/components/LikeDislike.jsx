import { IconButton, Stack, Typography, Box } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useState } from 'react';

export default function LikeDislike() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  const handleLike = () => {
    if (likeActive) {
      setLikes((l) => Math.max(0, l - 1));
      setLikeActive(false);
    } else {
      setLikes((l) => l + 1);
      setLikeActive(true);
      setDislikeActive(false);
    }
  };

  const handleDislike = () => {
    if (dislikeActive) {
      setDislikes((d) => Math.max(0, d - 1));
      setDislikeActive(false);
    } else {
      setDislikes((d) => d + 1);
      setDislikeActive(true);
      setLikeActive(false);
    }
  };

  return (
    <Stack
      direction="row"
      spacing={0}
      alignItems="center"
      sx={{
        background: `linear-gradient(135deg, rgba(124, 77, 255, 0.1) 0%, rgba(255, 0, 255, 0.05) 100%)`,
        border: '2px solid #7C4DFF',
        borderRadius: 2,
        p: 1,
        boxShadow: '0 0 15px rgba(124, 77, 255, 0.2)',
      }}
    >
      <IconButton
        onClick={handleLike}
        sx={{
          color: likeActive ? '#FF00FF' : '#A0A0E0',
          transition: 'all 0.3s ease',
          textShadow: likeActive ? '0 0 10px #FF00FF' : 'none',
          '&:hover': {
            color: '#FF00FF',
            textShadow: '0 0 10px #FF00FF',
          },
        }}
      >
        <ThumbUpIcon />
      </IconButton>
      <Typography
        sx={{
          color: likeActive ? '#FF00FF' : '#E0E0FF',
          fontWeight: 700,
          minWidth: '40px',
          textAlign: 'center',
          transition: 'all 0.3s ease',
        }}
      >
        {likes}
      </Typography>

      <Box sx={{ width: '1px', height: '30px', backgroundColor: '#7C4DFF', mx: 1 }} />

      <IconButton
        onClick={handleDislike}
        sx={{
          color: dislikeActive ? '#FF00FF' : '#A0A0E0',
          transition: 'all 0.3s ease',
          textShadow: dislikeActive ? '0 0 10px #FF00FF' : 'none',
          '&:hover': {
            color: '#FF00FF',
            textShadow: '0 0 10px #FF00FF',
          },
        }}
      >
        <ThumbDownIcon />
      </IconButton>
      <Typography
        sx={{
          color: dislikeActive ? '#FF00FF' : '#E0E0FF',
          fontWeight: 700,
          minWidth: '40px',
          textAlign: 'center',
          transition: 'all 0.3s ease',
        }}
      >
        {dislikes}
      </Typography>
    </Stack>
  );
}

