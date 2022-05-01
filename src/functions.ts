import axios         from 'axios'
import {interpolate} from 'remotion'
import {Easing}      from 'remotion'

export type Position = {x: number, y: number}

export type PlotConfig = {
  x: {x0: number, min: number, max: number, nTicks: number, nthTick: number, length: number, direction: string}, 
  y: {y0: number, min: number, max: number, nTicks: number, nthTick: number, length: number, direction: string}, 
}

type Angle = {start: number, end: number}

export type Category = {name: string, value: number}

export type State = {categories: Category[], numerical: Position[], mode: string, config: PlotConfig}

export const colors: string[] = ["rgb(255,80,80)","rgb(255,255,80)","rgb(255,80,255)","rgb(80,255,80)","rgb(80,255,255)","rgb(0,80,80)","rgb(80,0,80)", "rgb(80,80,0)"]

export const makeData = (start: number, end: number): Position[] => {
  const data: Position[] = []
  for (let i = start; i <= end; i++) {
    data.push({x:i, y:-i*i})
  }
  return data
}

export const getRanges = (data: Position[]): PlotConfig => {
  const X: number[] = data.map(item => item.x)
  const Y: number[] = data.map(item => item.y)
  
  // const xMax     = roundValue(Math.max(...X)/20)*20
  const xMin     = Math.min(...X)
  const yMin     = Math.min(...Y)
  const xMax     = Math.max(...X)
  const yMax     = Math.max(...Y)
  const nTicksX  = 20
  const nTicksY  = 10
  const nthTickX = 2
  const nthTickY = 2


  const oInX = xMin < 0 && xMax > 0 // from left to right
  const oSmallerX = xMin >= 0 && xMax >  0 // from left to right

  const oBiggerX  = xMin <  0 && xMax <= 0 // from right to left
  
  
  const oInY = yMin < 0 && yMax > 0 // from bottom to top
  const oBiggerY  = yMin <  0 && yMax <= 0 // from top to bottom
  const oSmallerY = yMin >= 0 && yMax >  0 // from bottom to top

  const directionX = oBiggerX? 'rightToLeft' : 'leftToRight'
  const directionY = oBiggerY? 'topToBottom' : 'bottomToTop'


  const a = oInX && oInY
  
  const b = oInX && oBiggerY 
  const c = oInX && oSmallerY
  const d = oSmallerX && oInY
  const e = oBiggerX && oInY

  const f = oBiggerX && oBiggerY
  const g = oSmallerX && oBiggerY
  const h = oBiggerX && oSmallerY
  const i = oSmallerX && oSmallerY

  const direction = [a,b,c,d,e,f,g,h,i]


  const config = {
    x:{x0:5, min:xMin, max:xMax, nTicks:nTicksX, nthTick:nthTickX, length: 90, direction: directionX},
    y:{y0:20, min:yMin, max:yMax, nTicks:nTicksY, nthTick:nthTickY, length: 70, direction: directionY},
  }

  return config

}

export const roundValue = (n: number): number => {

  const f1 = (v:number): number => Math.pow(10, Math.floor(Math.log10(v)))
  
  const getRounded = (num: number): number => {
    let value
    if (num < 3){
      value = 0
    }
    else if(num < 8){
      value = 5
    }
    else{
      value=10
    }
    return value
  }

  let result
  const p = f1(n)
  const c = Math.floor(n/p*10)
  const d = Math.floor(c/10)*10
  const l = (c-d)
  if(d >= 80){
  }
  else{
    const o = getRounded(l)
    result = d+o
  }
  result = result *p/10
  return result
}

export const ease = (frame: number, start: number, end: number): number => {
  const r = interpolate(frame, [start, end], [0, 1], {
    easing: Easing.bezier(.5, 0, .5, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })

  return r
}

const getSum = (array: number[]): number => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

const getDistribution = (array: number[]): number[] => {
  const sum = getSum(array)
  const distribution = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i] / sum * 360
    distribution.push(element)
  }
  return distribution
}

const getCumulative = (array: number[]): number[] => {
  let result = [array[0]]

  for (let i = 0; i < array.length-1; i++) {

    const element = result[i] + array[i+1]
    result.push(element)
  }
  return result
}

export const getArcsFromData = (data: number[]): Angle[] => {

  const distribution = getDistribution(data)         // [1, 1, 2] -> [1,1,2]/(1+1+4)*360 = [90, 90, 180]
  const angles       = getCumulative(distribution)
  angles.unshift(0)

  const arcs = []

  for (let i = 0; i < angles.length-1; i++) {
    const angle = {start:0, end: 0}
    angle.start = angles[i];
    angle.end = angles[i+1];

    arcs.push(angle)
    
  }

  return arcs
}

export function polarToCartesian(cx: number, cy: number, radius: number, degrees: number): Position {
  
  const radians= (degrees-90) * Math.PI / 180.0
  const x = cx + (radius * Math.cos(radians)) 
  const y = cy + (radius * Math.sin(radians))

  return {x:x, y:y}
}

export function getArc(x: number, y: number, radius: number, startAngle: number, endAngle: number): string{

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

export const getHeightsFromData = (data: number[], maxHeight: number): number[] => {

  const maxValue = Math.max(...data)
  const heights  = data.map((value) => value/maxValue*maxHeight)

  return heights
}

export const renderVideo = async (body: State, setIsRendering: Function): Promise<void> => {
    
  setIsRendering(true)
  
  const res  = await axios.post("https://vktrn.com/render/", body, {responseType: 'blob'})
  const url  = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement('a');
  link.href  = url;
  link.setAttribute('download', 'file.mp4'); //or any other extension
  document.body.appendChild(link);
  link.click();

  setIsRendering(false)
}