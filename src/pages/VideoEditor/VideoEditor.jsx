import React           from 'react';
import {useState}      from 'react'
import {ModeSelection} from '../../components/ModeSelection'
import {Categorical}   from '../../remotion/Categorical/Categorical'
import {Numerical}     from '../../remotion/Numerical/Numerical'
import {TopBar}        from './VideoEditor.styles'
import {ToolBar}       from './VideoEditor.styles'

export const VideoEditor = () => {

  const [mode, setMode] = useState("pie-chart")

  return (
    <>
      <TopBar>
        <ModeSelection setMode={setMode}/>
      </TopBar>
      {mode === "pie-chart" && <Categorical mode = {mode}/>}
      {mode === "histogram" && <Categorical mode = {mode}/>}
      {mode === "axis"      && <Numerical   mode = {mode}/>}
    </>
  )
}

export default VideoEditor