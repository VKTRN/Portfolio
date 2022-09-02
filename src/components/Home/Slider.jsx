import React      from 'react'
import {useState} from 'react'

const text1 = 'asdfasdf asdfasdf asdfasdf'
const text2 = 'asdfasdf asdfasdf asdfasdfdfd fdfdfd'
const text3 = 'asfasdf asdfasdfasd fasdf sdf asuerhjkdfhgjkxch jkfhjkfhksdhf'

const texts = [text1, text2, text3]

function Slider(){

  const [slide, setSlide] = useState(999)
  const [direction, setDirection] = useState('left')

  const nextSlide = () => {
    setDirection('left')
    setSlide(prev => prev + 1)
  }
  
  const prevSlide = () => {
    setDirection('right')
    setSlide(prev => prev - 1)
  }

  let slide1
  let slide2
  let slide3

  if (slide % 3 === 0){
    slide3 = direction === 'left' ? 'inactive-left ontop':'inactive-left'
    slide1 = 'active'
    slide2 = direction === 'right' ? 'inactive-right ontop':'inactive-right'

  }

  if (slide % 3 === 1){
    slide1 = direction === 'left' ? 'inactive-left ontop':'inactive-left'
    slide2 = 'active'
    slide3 = direction === 'right' ? 'inactive-right ontop':'inactive-right'
  }

  if (slide % 3 === 2){
    slide2 = direction === 'left' ? 'inactive-left ontop':'inactive-left'
    slide3 = 'active'
    slide1 = direction === 'right' ? 'inactive-right ontop':'inactive-right'
  }

  return(
    <div className="slider dark-surface">
      <div className = 'content'>
        <p>
          {texts[slide % 3]}
        </p>
        
      </div>
      <div className="slides">
        <div className={slide1 + ' container a'}><img src = './audi.png'></img></div>
        <div className={slide2 + ' container b'}><img src = './bmw.jpg'></img></div>
        <div className={slide3 + ' container c'}><img src = './mercedes.jpg'></img></div>
      </div>

      <button id='button-left'  onClick = {prevSlide}></button>
      <button id='button-right' onClick = {nextSlide}></button>
    </div>
  )
}

export default Slider;