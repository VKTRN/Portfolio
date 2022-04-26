import React              from 'react';
import axios              from 'axios'
import {useState}         from 'react'
import {Viewer}           from '../Viewer/Viewer'
import {RenderButton}     from '../shared/RenderButton/RenderButton'
import {Wrapper, LeftBar} from './Categorical.styles'
import {Controls}         from './Controls/Controls'

export const Categorical = () => {

  // const renderVideo = async () => {
    
  //   setisRendering(true)
    
  //   const res  = await axios.post("https://vktrn.com/render/", {data:categories}, {responseType: 'blob'})
  //   const url  = window.URL.createObjectURL(new Blob([res.data]));
  //   const link = document.createElement('a');
  //   link.href  = url;
  //   link.setAttribute('download', 'file.mp4'); //or any other extension
  //   document.body.appendChild(link);
  //   link.click();

  //   setisRendering(false)
  // }

  // const [categories, setCategories]   = useState([{name: "text", value: 5}, {name: "text", value: 5}, {name: "text", value: 5}]);
  const [isRendering, setisRendering] = useState(false)

  return (
    <Wrapper>
      <LeftBar>
        {/* <RenderButton isRendering={isRendering} renderVideo={renderVideo}/> */}
        <RenderButton isRendering={isRendering} />
        <Controls/>
      </LeftBar>
      <Viewer/>
    </Wrapper>
  )
}

