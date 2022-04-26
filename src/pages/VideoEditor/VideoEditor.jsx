import React           from 'react';
import {useSelector}   from "react-redux"
import {ModeSelection} from '../../components/ModeSelection'
import {Categorical}   from '../../remotion/Categorical/Categorical'
import {Numerical}     from '../../remotion/Numerical/Numerical'
import {TopBar}        from './VideoEditor.styles'

export const VideoEditor = () => {

  const mode = useSelector(state => state.mode)

  return (
    <>
      <TopBar>
        <ModeSelection/>
      </TopBar>
      {mode === "pie-chart" && <Categorical/>}
      {mode === "histogram" && <Categorical/>}
      {mode === "axis"      && <Numerical  />}
    </>
  )
}

export default VideoEditor