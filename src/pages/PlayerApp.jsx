import React from 'react';
import { Player } from "@remotion/player";
import { Comp } from "../remotion/MyComp";
import {useState} from 'react'
import './style.css'
import axios from 'axios'
import { input } from '@mui/material';

export const PlayerApp = () => {

  const addCategory = () => {
    setCategories([...categories,{name: "name", value: 5}])
  }

  const removeCategory = () => {
    setCategories(categories.slice(0,-1))
  }
  
  const addValue = (i) => {
    const copy = [...categories]
    copy[i].value += 1
    setCategories(copy)
  }

  const removeValue = (i) => {
    const copy = [...categories]
    copy[i].value -= 1
    setCategories(copy)
  }

  const arrayToQuery = (array) => {
    let query = ""
    array.forEach((item) => {
      query += "&data=" + item
    })
    return query
  }

  const renderVideo = async () => {
    const res = await axios.get("https://vktrn.com/render/?" + arrayToQuery(categories), {responseType: 'blob'})
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.mp4'); //or any other extension
    document.body.appendChild(link);
    link.click();
  }

  const changeName = (value, i) => {
    const cats = [...categories]
    cats[i].name = value
    setCategories(cats)
  }

  const changeValue = (value, i) => {
    const cats = [...categories]
    const newVal = value < 1? 1 : value
    cats[i].value = newVal
    setCategories(cats)
  }

  const [categories, setCategories] = useState([{name: "name1", value: 5},{name: "name2", value: 5}, {name: "name3", value: 5}]);

  return (
	<div className='app'>
		<div className="controls">
			<button type='button' disabled={categories.length === 8} onClick={addCategory}>add category</button>

			<button type='button' disabled={categories.length === 2} onClick={removeCategory}>remove category</button>
			<button type='button'  onClick={renderVideo}>render</button>
			<div className='categories'>
				{
          categories.map((category, i) => {
            return(
              <div className='category'>
                  <input     type="text" value={category.name} onChange = {(e) => changeName(e.target.value, i)}></input>
                  <input    type="number" value={category.value} onChange = {(e) => changeValue(e.target.value, i)}></input>
                </div>
              )
            })
          }
      </div>

		</div>
		<div className='player'>
			<Player
				controls
				component={Comp}
				inputProps={{data:categories}}
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
	</div>
  );
};

export default PlayerApp;
