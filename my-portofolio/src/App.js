import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './Loading';
import IntroPage from './IntroPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="App">
      <IntroPage />
    </div>
  );
}

export default App;
