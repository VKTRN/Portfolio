import {useState, useRef, useEffect, useContext} from "react"

function Accordion({id, open, text}){

    return(
        <div id = {id} className = {`accordion ${open} item`} >
        <div className="text">
        {text}
        </div>
      </div>
    )

}

export default Accordion;