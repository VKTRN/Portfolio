import React from "react";
import { Composition } from "remotion";
import { PieChartComp } from "../remotion/PieChartComp";
import { HistogramComp } from "../remotion/HistogramComp";
 
export const MyVideo = ({mode}) => {
  return (
    <>
      <Composition
        component={mode === 'pie-chart'? PieChartComp: HistogramComp}
        durationInFrames={150}
        width={1920}
        height={1080}
        fps={30}
        id="my-comp"
      />
    </>
  );
};