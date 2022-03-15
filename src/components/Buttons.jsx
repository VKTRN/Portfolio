import React from 'react'
import {useState} from 'react'
import { CgArrowsShrinkV,CgArrowsShrinkH } from 'react-icons/cg';
import {HiPlus,HiMinus  } from 'react-icons/hi';
import {BsArrowBarLeft, BsArrowBarRight,BsArrowBarUp,BsArrowBarDown} from 'react-icons/bs';
import LabeledSwitch from './LabeledSwitch';



function Buttons({setDirection, move, position, togglePosition}) {

    const [active, setActive] = useState({top:"orange", bottom:"white", left:"orange", right:"white"})

    function handleClick(direction){
        setDirection(direction)
        
        if(direction === "left"){setActive({top:active.top, bottom:active.bottom, left:"orange", right:"white"})}
        if(direction === "right"){setActive({top:active.top, bottom:active.bottom, left:"white", right:"orange"})}
        if(direction === "top"){setActive({top:"orange", bottom:"white", left:active.left, right:active.right})}
        if(direction === "bottom"){setActive({top:"white", bottom:"orange", left:active.left, right:active.right})}

    }

  return (
    <div className="buttons">
        <div className="direction-bg-y"></div>
        <div className="direction-bg-x"></div>
        <button className="top"    onClick={() => {handleClick("top")}}    style={{backgroundColor:active.top}}><BsArrowBarDown/></button>
        <button className="bottom" onClick={() => {handleClick("bottom")}} style={{backgroundColor:active.bottom}}><BsArrowBarUp/></button>
        <button className="left"   onClick={() => {handleClick("left")}}   style={{backgroundColor:active.left}}><BsArrowBarRight/></button>
        <button className="right"  onClick={() => {handleClick("right")}}  style={{backgroundColor:active.right}}><BsArrowBarLeft/></button>

        <div className="horizontal">
            <button className="horizontal-left" onClick={() => move("left")}> 
                <HiMinus/>
            </button>
            <CgArrowsShrinkH></CgArrowsShrinkH>
            <button className="horizontal-right" onClick={() => move("right")}> 
                <HiPlus/>
            </button>
        </div>
        <div className="vertical">
            <button className="horizontal-top"  onClick={() => move("up")}>
                <HiMinus/>
            </button>
            <CgArrowsShrinkV></CgArrowsShrinkV>
            <button className="horizontal-bottom" onClick={() => move("down")}> 
                <HiPlus/>
            </button>
        </div>
        <LabeledSwitch position={position} toggle={togglePosition} ></LabeledSwitch>
  </div>
  );
}

export default Buttons;