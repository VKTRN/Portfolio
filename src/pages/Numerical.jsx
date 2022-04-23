// import React from 'react';
// import { Player } from "@remotion/player";
// import { PieChartComp } from "../remotion/PieChartComp";
// import { HistogramComp } from "../remotion/HistogramComp";
// import {useState} from 'react'
// import axios from 'axios'
// import LoadingSpinner from '../components/Spinner';
// import ReactDataSheet from 'react-datasheet';
// import 'react-datasheet/lib/react-datasheet.css';
// import {BasicSheet} from '../remotion/BasicSheet';

// export const PlayerApp = () => {

//   const addCategory = () => {
//     setCategories([...categories,{name: "text", value: 5}])
//   }

//   const removeCategory = () => {
//     setCategories(categories.slice(0,-1))
//   }

//   const renderVideo = async () => {
    
//     setisRendering(true)
    
//     const res  = await axios.post("https://vktrn.com/render/", {data:mode === 'axis'?graphData:categories, mode: mode}, {responseType: 'blob'})
//     const url  = window.URL.createObjectURL(new Blob([res.data]));
//     const link = document.createElement('a');
//     link.href  = url;
//     link.setAttribute('download', 'file.mp4'); //or any other extension
//     document.body.appendChild(link);
//     link.click();

//     setisRendering(false)
//   }

//   const changeName = (value, i) => {
//     const cats = [...categories] // clone array
//     cats[i].name = value // change i-th entry
//     setCategories(cats) // set state
//   }

//   const changeValue = (value, i) => {
//     const cats = [...categories]
//     const newVal = value < 1? 1 : value
//     cats[i].value = parseFloat(newVal) 
//     setCategories(cats)
//   }

//   const handleModeChange = (e) => setMode(e.target.value)

//   const [categories, setCategories]   = useState([{name: "text", value: 5}, {name: "text", value: 5}, {name: "text", value: 5}]);
//   const [isRendering, setisRendering] = useState(false)
//   const [mode, setMode]               = useState("axis")
//   const [graphData, setGraphData]     = useState(makeGraphData())
//   const ranges                        = getRanges(graphData)
//   const [xMax, setxMax]               = useState(ranges.x.max)
//   const [nthTick, setNthTick]         = useState(ranges.x.nthTick)
//   const [nTicks, setNTicks]           = useState(ranges.x.nTicks)
//   const [yMax, setyMax]               = useState(ranges.y.max)
//   const [nthYTick, setNthYTick]       = useState(ranges.y.nthTick)
//   const [nYTicks, setNYTicks]         = useState(ranges.y.nTicks)

//   return (
// 	<div className='app'>
// 		<div className="controls">
//       {
//          mode !== 'axis' &&
//          <>
//           <button type='button' disabled={categories.length === 6} onClick={addCategory}>add category</button>
//           <button type='button' disabled={categories.length === 2} onClick={removeCategory}>remove category</button>
//          </>

//       }
// 			<button className='render-button' type='button' disabled = {isRendering}  onClick={renderVideo}>{isRendering?
//         <>
//          <LoadingSpinner/> rendering...
//         </>
//          :"render"
//         }
//       </button>

//       {
//         mode === 'axis' ?
//       <div className='cell-sheet'>
//         <BasicSheet graphData = {graphData} setGraphData = {setGraphData}/>
//       </div>
//       :
// 			<div className='categories'>
// 				{
//           categories.map((category, i) => {
//             return(
//               <div className='category'>
//                   <input type="text" value={category.name} onChange = {(e) => changeName(e.target.value, i)}></input>
//                   <input type="number" value={category.value} onChange = {(e) => changeValue(e.target.value, i)}></input>
//                 </div>
//               )
//             })
//           }
//       </div>

//       }


// 		</div>
// 		<div className='player'>
// 			<Player
// 				controls
// 				component={PieChartComp}
// 				inputProps={{data:mode === 'axis'?graphData:categories, mode: mode, 
//           xMax: xMax, 
//           yMax: yMax, 
//           nthYTick:nthYTick, 
//           nthTick:nthTick, 
//           nYTicks:nYTicks,
//           nTicks:nTicks
//         }}
//         durationInFrames={150}
// 				compositionWidth={1920}
// 				compositionHeight={1080}
// 				showVolumeControls={false}
// 				fps={30}
// 				allowFullscreen={false}
// 				style={{width: 800, height: 500}}
//         />
// 		</div>
//     <div className="settings">
//       <select className='mode-select' name="modes" id="mode-select" onChange={e => handleModeChange(e)}>
//         <option value="axis">Axis</option>
//         <option value="circle">Circle</option>
//         <option value="pie-chart">Pie Chart</option>
//         <option value="histogram">Histogram</option>
//       </select>
//       <div className="range">
//         <span>x-max</span>
//         <input type="number" value={xMax} onChange = {(e) => {setxMax(parseInt(e.target.value))}}/>
//       </div>
//       <div className="nth-tick">
//         <span>nth-tick</span>
//         <input type="number" value={nthTick} onChange = {(e) => {setNthTick(parseInt(e.target.value))}}/>
//       </div>
//       <div className="n-ticks">
//         <span>n-ticks</span>
//         <input type="number" value={nTicks} onChange = {(e) => {setNTicks(parseInt(e.target.value))}}/>
//       </div>
//       <div className="range">
//         <span>Y-max</span>
//         <input type="number" value={yMax} onChange = {(e) => {setyMax(parseInt(e.target.value))}}/>
//       </div>
//       <div className="nth-tick">
//         <span>nthY-tick</span>
//         <input type="number" value={nthYTick} onChange = {(e) => {setNthYTick(parseInt(e.target.value))}}/>
//       </div>
//       <div className="n-ticks">
//         <span>nY-ticks</span>
//         <input type="number" value={nYTicks} onChange = {(e) => {setNYTicks(parseInt(e.target.value))}}/>
//       </div>
//     </div>
// 	</div>
//   );
// };

// export default PlayerApp;










// const makeGraphData = () => {
//   const data = []
//   for (let i = 0; i < 16; i++) {
//     data.push({x:.9*i, y:3*(i)*(i)})
//   }
//   return data
// }

// const getRanges = (data) => {
//   const X = data.map((item) => item.x)
//   const Y = data.map((item) => item.y)
  
//   const xMin     = Math.min(...X)
//   const yMin     = Math.min(...Y)
//   const xMax     = roundValue(Math.max(...X)/20)*20
//   const yMax     = Math.max(...Y)
//   const nTicksX  = 20
//   const nTicksY  = 10
//   const nthTickX = 2
//   const nthTickY = 2

//   const ranges = {
//     x:{min:xMin, max:xMax,nTicks:nTicksX, nthTick:nthTickX},
//     y:{min:yMin, max:yMax,nTicks:nTicksY, nthTick:nthTickY},
//   }

//   return ranges

// }

// const roundValue = (n) => {
  
//   function f1(v) {
//     return Math.pow(10, Math.floor(Math.log10(v)));
//   }
  
//   const getRounded = (num) => {
//     let value
//     if (num < 3){
//       value = 0
//     }
//     else if(num < 8){
//       value = 5
//     }
//     else{
//       value=10
//     }
//     return value
//   }

//   let result
//   const p = f1(n)
//   const c = parseInt(n/p*10)
//   const d = Math.floor(c/10)*10
//   const l = parseInt(c-d)
//   if(d >= 80){
//     result = 100
//   }
//   else{
//     const o = getRounded(l)
//     result = d+o
//   }
//   result = result *p/10
//   return result
// }