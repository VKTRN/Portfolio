import { useState, useEffect } from 'react';

const isBrowser = typeof window !== `undefined`;

function getScrollPosition() {
  return window.pageYOffset
}

function useScrollPosition() {
  const [position, setScrollPosition] = useState(getScrollPosition());
  useEffect(() => {
    let requestRunning = null;
    function handleScroll() {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition());
          requestRunning = null;
        });
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);


  return position;
}

export default useScrollPosition

