import React, { useState, lazy, Suspense } from 'react';
import './App.css';

// Lazy load components to reduce initial bundle size
const Loading = lazy(() => import('./Loading'));
const IntroPage = lazy(() => import('./IntroPage'));
const CustomCursor = lazy(() => import('./CustomCursor'));

function App() {
  // Check session storage to see if we've already shown the loading screen
  const [isLoading, setIsLoading] = useState(() => {
    const hasLoaded = sessionStorage.getItem('portfolioLoaded');
    return !hasLoaded;
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('portfolioLoaded', 'true');
  };

  return (
    <div className="App">
      <Suspense fallback={<div />}>
        <CustomCursor />
        {isLoading && <Loading onLoadingComplete={handleLoadingComplete} />}
        <IntroPage startAnimation={!isLoading} />
      </Suspense>
    </div>
  );
}

export default App;
