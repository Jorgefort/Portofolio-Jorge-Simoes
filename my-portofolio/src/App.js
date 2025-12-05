import React, { useState } from 'react';
import './App.css';
import Loading from './Loading';
import IntroPage from './IntroPage';
import CustomCursor from './CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      <CustomCursor />
      {isLoading && <Loading onLoadingComplete={handleLoadingComplete} />}
      <IntroPage startAnimation={!isLoading} />
    </div>
  );
}

export default App;
