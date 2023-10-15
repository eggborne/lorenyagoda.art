import './App.css';
import { useEffect, useState } from 'react';
import ModelDisplay from './ModelDisplay';


const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      console.log('height is', window.innerHeight)
      document.documentElement.style.setProperty('--actual-height', window.innerHeight + 'px');
    }
  }, [loaded]);

  return (
    <div id='home-container'>
      <header>        
        <h1>{'Tools for Loren :)'}</h1>
      </header>
      <main>
        <ModelDisplay color={'red'} />
      </main>
      <footer>
        <h4>Website by <a href='https://mikedonovan.dev'>mike@mikedonovan.dev</a></h4>
      </footer>
    </div>
  )
}

export default App;
