import React, { useState, lazy, Suspense } from 'react';
import './App.css';

// Lazy load components to reduce initial bundle size
const Loading = lazy(() => import('./Loading'));
const IntroPage = lazy(() => import('./IntroPage'));
const CustomCursor = lazy(() => import('./CustomCursor'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
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
