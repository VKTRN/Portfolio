import {useState, useRef, useEffect, useContext} from "react"
import Logo from "./Logo"
import Accordion from "./Accordion"

function Accordion({id, text}){

  const [open, set_open] = useState("")

  return(
    <>
      <Logo      id = {id}           open={open}   set_open={set_open}></Logo>
      <Accordion id = {id + "accordion"} open = {open} text = {text_html}></Accordion>
    </>
  )

}

export default Accordion;