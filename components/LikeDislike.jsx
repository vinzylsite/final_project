import { IconButton, Stack, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useState } from 'react';

export default function LikeDislike() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <IconButton onClick={() => setLikes((l) => l + 1)}>
        <ThumbUpIcon />
      </IconButton>
      <Typography>{likes}</Typography>
      <IconButton onClick={() => setDislikes((d) => d + 1)}>
        <ThumbDownIcon />
      </IconButton>
      <Typography>{dislikes}</Typography>
    </Stack>
  );
}
 
