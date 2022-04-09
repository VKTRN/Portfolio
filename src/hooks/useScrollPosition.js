import { useState, useEffect } from 'react';

const isBrowser = typeof window !== `undefined`;

function getScrollPosition() {
  return isBrowser ? window.pageYOffset : 0;
}

function useScrollPosition() {
  const [position, setScrollPosition] = useState(getScrollPosition());
  useEffect(() => {
    let requestRunning = null;
    function handleScroll() {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition());
          requestRunning = null;
        });
      }
    }

    if (isBrowser) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return position;
}

export default useScrollPosition

