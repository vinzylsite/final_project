import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import CommentSection from '../components/CommentSection';
import videos from '../data/videos';

export default function Watch() {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id) || videos[0];

  return (
    <div>
      <VideoPlayer src={video.src} title={video.title} />
      <CommentSection initialComments={[]} />
    </div>
  );
}
 
