import React from 'react'

type Props = {
  id: string,
  open: string,
  text: string,
}

function Accordion({id, open, text}:Props){

    return(
        <div id = {id} className = {`accordion ${open} item`} >
        <div className="text">
        {text}
        </div>
      </div>
    )

}

export default Accordion;