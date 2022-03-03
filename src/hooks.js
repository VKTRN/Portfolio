import {useState, useEffect} from 'react'

function useWindowDimensions() {
  
  function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
  }
  
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function useDimensions(selector) {

  console.log(selector);
  console.log(document);
  console.log(document.querySelector(".container"))
  
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



export {useWindowDimensions, useDimensions}