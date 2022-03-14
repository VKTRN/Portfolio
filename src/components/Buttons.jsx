import React from 'react'
import { CgArrowsShrinkV,CgArrowsShrinkH } from 'react-icons/cg';
import {HiPlus,HiMinus  } from 'react-icons/hi';
import {BsArrowBarLeft, BsArrowBarRight,BsArrowBarUp,BsArrowBarDown} from 'react-icons/bs';



function Buttons({setDirection, move, togglePosition}) {

  return (
    <div className="buttons">
        <div className="direction-bg-y"></div>
        <div className="direction-bg-x"></div>
        <button className="top"    onClick={() => {setDirection("top")}}><BsArrowBarDown/></button>
        <button className="bottom" onClick={() => {setDirection("bottom")}}><BsArrowBarUp/></button>
        <button className="left"   onClick={() => {setDirection("left")}}><BsArrowBarRight/></button>
        <button className="right"  onClick={() => {setDirection("right")}}><BsArrowBarLeft/></button>

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
        <button className="position" onClick={togglePosition}><span>relative</span></button>
  </div>
  );
}

export default Buttons;