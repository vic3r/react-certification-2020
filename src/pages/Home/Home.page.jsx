import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import VideoList from '../../components/VideoList';
import VideoContext from '../../state/VideoContext';
import { useAuth } from '../../providers/Auth';

import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  const { videos } = useContext(VideoContext);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <VideoList videos={videos} parent="homepage" />
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <>
          <Link to="/login">let me in →</Link>
        </>
      )}
    </section>
  );
}

export default HomePage;
