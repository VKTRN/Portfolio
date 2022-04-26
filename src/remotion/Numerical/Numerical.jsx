import React                 from 'react';
import {useState}            from 'react'
import axios                 from 'axios'
import {Viewer}              from '../Viewer/Viewer'
import {BasicSheet}          from './BasicSheet/BasicSheet';
import {RenderButton}        from '../shared/RenderButton/RenderButton'
import {Wrapper, LeftBar}    from './Numerical.styles'
import {Controls}            from './Controls/Controls'

export const Numerical = () => {

  // const renderVideo = async () => {
    
  //   setisRendering(true)
    
  //   const res  = await axios.post("https://vktrn.com/render/", {data:data}, {responseType: 'blob'})
  //   const url  = window.URL.createObjectURL(new Blob([res.data]));
  //   const link = document.createElement('a');
  //   link.href  = url;
  //   link.setAttribute('download', 'file.mp4'); //or any other extension
  //   document.body.appendChild(link);
  //   link.click();

  //   setisRendering(false)
  // }

  const [isRendering, setisRendering] = useState(false)

  return (
    <Wrapper>
      <LeftBar>
        {/* <RenderButton isRendering = {isRendering} renderVideo={renderVideo}/> */}
        <RenderButton isRendering = {isRendering}/>
        <Controls/>
      </LeftBar>
      <Viewer/>
      <BasicSheet/>
    </Wrapper>
  )
}