import React from 'react'
import Logo from "./Logo"
import Accordion from "./Accordion"

type Props = {
  id: string,
  text: string,
  open: string,
  set_open: any,
  i: number
}

function StackItem({id, text, open, set_open, i}: Props){

  return(
    <>
      <Logo      id = {id}           open={open}   set_open={set_open} i={i}></Logo>
      <Accordion id = {id + "-accordion"} open = {open[i]} text = {text}></Accordion>
    </>
  )

}

export default StackItem;