import React from "react";
import { Composition } from "remotion";
import { SequenceWrapper } from "../remotion/SequenceWrapper";

export const MyVideo = () => {
  return (
    <>
      <Composition
        component={SequenceWrapper}
        durationInFrames={150}
        width={1920}
        height={1080}
        fps={30}
        id="my-comp"
      />
    </>
  );
};