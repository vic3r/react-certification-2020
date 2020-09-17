import React, { useRef, useContext } from 'react';
import VideoList from '../../components/VideoList';
import VideoContext from '../../state/VideoContext';
import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  const { videos } = useContext(VideoContext);

  return (
    <section className="homepage" ref={sectionRef}>
      <VideoList videos={videos} parent="homepage" />
    </section>
  );
}

export default HomePage;
