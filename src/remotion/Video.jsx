import React from "react";
import { Composition } from "remotion";
import { PieChartComp } from "../remotion/PieChartComp";

export const MyVideo = () => {
  return (
    <>
      <Composition
        component={PieChartComp}
        durationInFrames={150}
        width={1920}
        height={1080}
        fps={30}
        id="my-comp"
      />
    </>
  );
};