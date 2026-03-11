import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import CommentItem from './CommentItem';

export default function CommentSection({ initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);
  const [text, setText] = useState('');

  const handlePost = () => {
    if (text.trim()) {
      setComments([...comments, { author: 'You', text }]);
      setText('');
    }
  };

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          multiline
          minRows={2}
          placeholder="Add a public comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={handlePost} sx={{ mt: 1 }} variant="contained">
          Comment
        </Button>
      </Box>
      {comments.map((c, idx) => (
        <CommentItem key={idx} comment={c} />
      ))}
    </Box>
  );
}
 
