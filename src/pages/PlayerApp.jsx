import React from 'react';
import { Player } from "@remotion/player";
import { PieChartComp } from "../remotion/PieChartComp";
import { HistogramComp } from "../remotion/HistogramComp";
import {useState} from 'react'
import axios from 'axios'
import LoadingSpinner from '../components/Spinner';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import {BasicSheet} from '../remotion/BasicSheet';

export const PlayerApp = () => {

  const addCategory = () => {
    setCategories([...categories,{name: "text", value: 5}])
  }

  const removeCategory = () => {
    setCategories(categories.slice(0,-1))
  }

  const renderVideo = async () => {
    // const res = await axios.get("https://vktrn.com/render/?" + arrayToQuery(categories.map((a) => a.value)), {responseType: 'blob'})
    setisRendering(true)
    const res = await axios.post("https://vktrn.com/render/", {data:mode === 'axis'?graphData:categories, mode: mode}, {responseType: 'blob'})
    
    // console.log("https://vktrn.com/render/?" + arrayToQuery(categories.map((a) => a.value)))
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.mp4'); //or any other extension
    document.body.appendChild(link);
    link.click();
    setisRendering(false)
  }

  const changeName = (value, i) => {
    const cats = [...categories]
    cats[i].name = value
    setCategories(cats)
  }

  const changeValue = (value, i) => {
    const cats = [...categories]
    const newVal = value < 1? 1 : value
    cats[i].value = parseFloat(newVal) 
    setCategories(cats)
  }

  const handleModeChange = (e) => setMode(e.target.value)

  const [categories, setCategories] = useState([{name: "text", value: 5},{name: "text", value: 5}, {name: "text", value: 5}]);
  const [isRendering, setisRendering] = useState(false)
  const [mode, setMode] = useState("axis")
  const [graphData, setGraphData] = useState(makeGraphData())

  return (
	<div className='app'>
		<div className="controls">
      {
         mode !== 'axis' &&
         <>
          <button type='button' disabled={categories.length === 6} onClick={addCategory}>add category</button>
          <button type='button' disabled={categories.length === 2} onClick={removeCategory}>remove category</button>
         </>

      }
			<button className='render-button' type='button' disabled = {isRendering}  onClick={renderVideo}>{isRendering?
        <>
         <LoadingSpinner/> rendering...
        </>
         :"render"
        }
      </button>

      {
        mode === 'axis' ?
      <div className='cell-sheet'>
        <BasicSheet graphData = {graphData} setGraphData = {setGraphData}/>
      </div>
      :
			<div className='categories'>
				{
          categories.map((category, i) => {
            return(
              <div className='category'>
                  <input type="text" value={category.name} onChange = {(e) => changeName(e.target.value, i)}></input>
                  <input type="number" value={category.value} onChange = {(e) => changeValue(e.target.value, i)}></input>
                </div>
              )
            })
          }
      </div>

      }


		</div>
		<div className='player'>
			<Player
				controls
				component={PieChartComp}
				inputProps={{data:mode === 'axis'?graphData:categories, mode: mode}}
				durationInFrames={150}
				compositionWidth={1920}
				compositionHeight={1080}
				showVolumeControls={false}
				fps={30}
				allowFullscreen={false}
				style={{
            width: 800,
            height: 500,
				}}
        />
		</div>
    <select className='mode-select' name="modes" id="mode-select" onChange={e => handleModeChange(e)}>
      <option value="axis">Axis</option>
      <option value="circle">Circle</option>
      <option value="pie-chart">Pie Chart</option>
      <option value="histogram">Histogram</option>
    </select>
	</div>
  );
};

export default PlayerApp;








const arrayToQuery = (array) => {
  let query = ""
  array.forEach((item) => {
    query += "&data=" + item
  })
  return query
}

const makeGraphData = () => {
  const data = []
  for (let i = 0; i < 16; i++) {
    data.push({x:i, y:(i)*(i)})
  }
  return data
}