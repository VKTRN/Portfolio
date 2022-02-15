import {useState, useRef, useEffect, useContext} from "react"
import React from 'react'
import Logo from "./Logo"
import Accordion from "./Accordion"

function StackItem({id, text, open, set_open, i}){


  return(
    <>
      <Logo      id = {id}           open={open}   set_open={set_open} i={i}></Logo>
      <Accordion id = {id + "-accordion"} open = {open[i]} text = {text}></Accordion>
    </>
  )

}

export default StackItem;