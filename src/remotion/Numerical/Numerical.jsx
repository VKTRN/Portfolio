import React                 from 'react';
import {useState}            from 'react'
import axios                 from 'axios'
import {Viewer}              from '../Viewer/Viewer'
import {BasicSheet}          from '../BasicSheet/BasicSheet';
import RenderButton          from '../shared/RenderButton/RenderButton'
import {makeData, getRanges} from '../../functions.js'
import {Wrapper, LeftBar}    from './Numerical.styles'
import {Controls}            from './Controls/Controls'

export const Numerical = ({mode}) => {

  const renderVideo = async () => {
    
    setisRendering(true)
    
    const res  = await axios.post("https://vktrn.com/render/", {data:data}, {responseType: 'blob'})
    const url  = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href  = url;
    link.setAttribute('download', 'file.mp4'); //or any other extension
    document.body.appendChild(link);
    link.click();

    setisRendering(false)
  }

  const [data, setData]               = useState(makeData(16))
  const [graphConfig, setGraphConfig] = useState(getRanges(data))
  const [isRendering, setisRendering] = useState(false)

  return (
    <Wrapper>
      <LeftBar>
        <RenderButton isRendering = {isRendering} renderVideo={renderVideo}/>
        <Controls config={graphConfig} setConfig={setGraphConfig}/>
      </LeftBar>
      <Viewer state={{data: data, graphConfig: graphConfig}} mode={mode}/>
      <BasicSheet data={data} setData={setData}/>
    </Wrapper>
  )
}


