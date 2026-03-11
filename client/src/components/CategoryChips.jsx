import { Chip, Stack } from '@mui/material';
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

export default function CategoryChips() {
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={1} sx={{ mb: 2, overflowX: 'auto' }}>
      {categories.map((cat) => (
        <Chip
          key={cat}
          label={cat}
          onClick={() => navigate(`/search?category=${encodeURIComponent(cat)}`)}
        />
      ))}
    </Stack>
  );
}
 
