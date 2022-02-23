import React from 'react'

type Props = {
  id: string,
  open: string,
  set_open: any,
  i: number,
}

function Logo({id,open, set_open, i}:Props){

  function toggleAccordion(event: any) {

      function close_accordion(){
          set_open(Array(open.length))
      }

      function open_accordion(){
          const value = Array(open.length)
          value[i] = "open"
          set_open(value)
      }

      function handleOutsideClick(event: any) {
          // if user clicks outside, the menu gets closed and the outside-click eventlistener is removed.
          const outside      = event.target.id !== id
          const is_accordion = event.target.classList.contains("accordion")
      
          if (outside && !is_accordion){
              close_accordion()
              document.removeEventListener('click', handleOutsideClick, true)
          }
      }

      function add_outside_click_listener(){
          document.addEventListener('click', handleOutsideClick, true)
      }

      function remove_outside_click_listener(){
          document.removeEventListener('click', handleOutsideClick, true)
      }

      const is_open = open[i] === 'open'

      if (is_open){
          close_accordion()
          remove_outside_click_listener()
      }
      else{
          open_accordion()
          add_outside_click_listener()
      }

  }

  return(
    <div  id={id} className="logo item" onClick={toggleAccordion} >
      <img src={`./svg/${id}.svg`} alt="" />
      <p>{id}</p>
    </div>
  )

}

export default Logo;