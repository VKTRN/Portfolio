import {useState, useEffect} from 'react'

function useDimensions(selector) {
  
  const element    = document.querySelector(selector)
  
  function get_dimensions(element) {
    return element.getBoundingClientRect()
  }
  
  
  const [dimensions, set_dimensions] = useState(get_dimensions(element));

  useEffect(() => {
    function handleResize() {
      set_dimensions(get_dimensions(element));
    }

    element.addEventListener('resize', handleResize);
    return () => element.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
}

export {useDimensions}