import React             from 'react'
import {Player}          from "@remotion/player"
import {SequenceWrapper} from '../SequenceWrapper'
import {Wrapper}         from './Viewer.styles'

export const Viewer = () => {
  return(
    <Wrapper>
      <Player
        controls
        component={SequenceWrapper}
        durationInFrames={150}
        compositionWidth={1920}
        compositionHeight={1080}
        showVolumeControls={false}
        fps={30}
        allowFullscreen={false}
        style={{width: 800, height: 450}}
      />
    </Wrapper>
  )
}