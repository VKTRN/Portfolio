import React               from "react"
import {Composition}       from 'remotion'
import {SequenceProvider}  from "./SequenceProvider"

export const MyVideo = () => {
  return (
      <Composition
        component={SequenceProvider}
        durationInFrames={150}
        width={1920}
        height={1080}
        fps={30}
        id="my-comp"
      />
  )
}