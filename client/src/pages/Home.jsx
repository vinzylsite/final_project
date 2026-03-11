import { Typography } from '@mui/material';
import VideoGrid from '../components/VideoGrid';
import videos from '../data/videos';

function Home() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Recommended
      </Typography>
      <VideoGrid videos={videos} />
    </>
  );
}

export default Home; 


