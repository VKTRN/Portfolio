import {interpolate}     from 'remotion'
import {Easing}          from 'remotion'

export const makeData = (n) => {
  const data = []
  for (let i = 0; i < n; i++) {
    data.push({x:i, y:(i)*(i)})
  }
  return data
}

export const getRanges = (data) => {
  const X = data.map((item) => item.x)
  const Y = data.map((item) => item.y)
  
  const xMin     = Math.min(...X)
  const yMin     = Math.min(...Y)
  const xMax     = roundValue(Math.max(...X)/20)*20
  const yMax     = Math.max(...Y)
  const nTicksX  = 20
  const nTicksY  = 10
  const nthTickX = 2
  const nthTickY = 2

  const config = {
    x:{x0:200, min:xMin, max:xMax,nTicks:nTicksX, nthTick:nthTickX},
    y:{y0:200, min:yMin, max:yMax,nTicks:nTicksY, nthTick:nthTickY},
    width:1600,
    height:600
  }

  return config

}

export const roundValue = (n) => {
  
  function f1(v) {
    return Math.pow(10, Math.floor(Math.log10(v)));
  }
  
  const getRounded = (num) => {
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
  const c = parseInt(n/p*10)
  const d = Math.floor(c/10)*10
  const l = parseInt(c-d)
  if(d >= 80){
  }
  else{
    const o = getRounded(l)
    result = d+o
  }
  result = result *p/10
  return result
}

export const ease = (frame, start, end) => {
  const r = interpolate(frame, [start, end], [0, 1], {
    easing: Easing.bezier(.5, 0, .5, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })

  return r
}