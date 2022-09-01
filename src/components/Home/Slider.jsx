import React      from 'react'
import {useState} from 'react'

function Slider(){

  const [slide, setSlide] = useState(99)

  const nextSlide = () => {
    setSlide(prev => prev + 1)
  }
  
  const prevSlide = () => {
    setSlide(prev => prev - 1)
  }

  let slide1
  let slide2
  let slide3

  if (slide % 3 === 0){
    slide3 = 'inactive-left'
    slide1 = 'active'
    slide2 = 'inactive-right'
  }

  if (slide % 3 === 1){
    slide1 = 'inactive-left'
    slide2 = 'active'
    slide3 = 'inactive-right'
  }

  if (slide % 3 === 2){
    slide2 = 'inactive-left'
    slide3 = 'active'
    slide1 = 'inactive-right'
  }

  return(
    <div className="slider dark-surface">
      <button id='button-left'  onClick = {prevSlide}></button>
      <button id='button-right' onClick = {nextSlide}></button>
      <div className={slide1 + ' container a'}>1</div>
      <div className={slide2 + ' container b'}>2</div>
      <div className={slide3 + ' container c'}>3</div>
    </div>
  )
}

export default Slider;