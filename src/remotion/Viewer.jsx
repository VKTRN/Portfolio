import React from 'react';
import {PieChartComp} from './PieChartComp'
import { Player } from "@remotion/player";

export const Viewer = ({state, mode}) => {
  return(
    <Player
      controls
      component={PieChartComp}
      inputProps={{state, mode}}
      durationInFrames={150}
      compositionWidth={1920}
      compositionHeight={1080}
      showVolumeControls={false}
      fps={30}
      allowFullscreen={false}
      style={{width: 800, height: 450}}
    />
  )
}