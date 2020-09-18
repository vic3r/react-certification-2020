import React, { useRef } from 'react';
import VideoList from '../../components/VideoList';
import { useAuth } from '../../providers/Auth';

const FavoritesPage = () => {
  const sectionRef = useRef(null);
  const { videos } = useAuth();

  return (
    <section className="favorites" ref={sectionRef}>
      <VideoList videos={videos} parent="favorites" />
    </section>
  );
};

export default FavoritesPage;
