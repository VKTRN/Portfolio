import React from "react";
import { Composition } from "remotion";
import { Comp } from "./MyComp";
import React from "react"
 
export const MyVideo = () => {
  return (
    <>
      <Composition
        component={Comp}
        durationInFrames={150}
        width={1920}
        height={1080}
        fps={30}
        id="my-comp"
      />
    </>
  );
};