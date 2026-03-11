import React from 'react';

export default function VideoPlayer({ src, title }) {
  return (
    <div>
      <video
        width="100%"
        height="auto"
        controls
        src={src}
        style={{ backgroundColor: 'black' }}
      >
        Your browser does not support the video tag.
      </video>
      <h2>{title}</h2>
    </div>
  );
}
 
