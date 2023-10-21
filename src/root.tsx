import './Root.css';
import { useEffect, useState } from 'react';
import ModelDisplay from './ModelDisplay';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

const Root = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      document.documentElement.style.setProperty('--actual-height', window.innerHeight + 'px');
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <Router>
      <div style={{
        opacity: loaded ? '1' : '0',
        transition: 'all 750ms ease'
      }} id='home-container'>
        <header>
          <h1>{'Tools for Loren :)'}</h1>
        </header>
        <Link to="/resize">
          <button>Resize image</button>
        </Link>
        <main>
          <Routes>
            <Route path="/" element={<ModelDisplay color={'red'} />} />
            <Route path="/resize" element={<div>Resize Image Content</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Root;
