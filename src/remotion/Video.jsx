import React              from "react"
import {Composition}      from 'remotion'
import {SequenceProvider} from "./SequenceProvider"

export const MyVideo = ({data}) => {
  return (
      <Composition
        component={SequenceProvider}
        durationInFrames={150}
        inputProps={data}
        width={1920}
        height={1080}
        fps={30}
        id="my-comp"
      />
  )
}