import React from 'react'
import {useState} from 'react'
import { CgArrowsShrinkV,CgArrowsShrinkH } from 'react-icons/cg';
import {HiPlus,HiMinus  } from 'react-icons/hi';
import {BsArrowBarLeft, BsArrowBarRight,BsArrowBarUp,BsArrowBarDown} from 'react-icons/bs';
import LabeledSwitch from './LabeledSwitch';



function Buttons({setDirection, move, position, togglePosition, highlighting}) {

    const [active, setActive] = useState({top:"coral", bottom:"rgb(227, 219, 255)", left:"coral", right:"rgb(227, 219, 255)"})

    function handleClick(direction){
        setDirection(direction)
        
        if(direction === "left"){setActive({top:active.top, bottom:active.bottom, left:"coral", right:"rgb(227, 219, 255)"})}
        if(direction === "right"){setActive({top:active.top, bottom:active.bottom, left:"rgb(227, 219, 255)", right:"coral"})}
        if(direction === "top"){setActive({top:"coral", bottom:"rgb(227, 219, 255)", left:active.left, right:active.right})}
        if(direction === "bottom"){setActive({top:"rgb(227, 219, 255)", bottom:"coral", left:active.left, right:active.right})}

    }

  return (
    <div className="buttons">
        <div className={`direction-bg y ${highlighting.directions}`} ></div>
        <div className={`direction-bg x ${highlighting.directions}`} ></div>
        <div className={`direction-bg y`} >
            <div className="corner top left"></div>
            <div className="corner top right"></div>
            <div className="corner bottom left"></div>
            <div className="corner bottom right"></div>
        </div>
        <div className={`direction-bg x`} ></div>
        <button className="direction top"    onClick={() => {handleClick("top")}}    style={{backgroundColor:active.top}}><BsArrowBarDown/></button>
        <button className="direction bottom" onClick={() => {handleClick("bottom")}} style={{backgroundColor:active.bottom}}><BsArrowBarUp/></button>
        <button className="direction left"   onClick={() => {handleClick("left")}}   style={{backgroundColor:active.left}}><BsArrowBarRight/></button>
        <button className="direction right"  onClick={() => {handleClick("right")}}  style={{backgroundColor:active.right}}><BsArrowBarLeft/></button>

        <div className={`change-value horizontal ${highlighting.values}`}>
            <button className="horizontal-left" onClick={() => move("left")}> 
                <HiMinus/>
            </button>
            <CgArrowsShrinkH></CgArrowsShrinkH>
            <button className="horizontal-right" onClick={() => move("right")}> 
                <HiPlus/>
            </button>
        </div>
        <div className={`change-value vertical ${highlighting.values}`}>
            <button className="horizontal-top"  onClick={() => move("up")}>
                <HiMinus/>
            </button>
            <CgArrowsShrinkV></CgArrowsShrinkV>
            <button className="horizontal-bottom" onClick={() => move("down")}> 
                <HiPlus/>
            </button>
        </div>
        <LabeledSwitch position={position} toggle={togglePosition} highlighting={highlighting.position}></LabeledSwitch>
  </div>
  );
}

export default Buttons;


