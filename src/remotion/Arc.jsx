import {useVideoConfig, useCurrentFrame, interpolate} from 'remotion';
import React from "react"


export const Arc = ({x, y, radius, start, end, color}) => {
	
	const config = useVideoConfig()

	return (
		<svg
			viewBox={`0 0 ${config.width} ${config.height}`}
			fill={color}
      style = {{position: "absolute"}}
		>
      <path d={getArc(x,y,radius,start,end)} />
		</svg>
	);
};

function polarToCartesian(cx, cy, radius, degrees) {
  
  const radians= (degrees-90) * Math.PI / 180.0
  const x = cx + (radius * Math.cos(radians)) 
  const y = cy + (radius * Math.sin(radians))

  return {x:x, y:y}
}

function getArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
        "L", x, y, start.x, start.y,
        "Z"
    ].join(" ");

    return d;       
}