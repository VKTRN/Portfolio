import React from 'react';

export const ModeSelection = ({setMode}) => {
  return (
    <select className='mode-select' name="modes" id="mode-select" onChange={(e) => setMode(e.target.value)}>
      <option value="pie-chart">Pie Chart</option>
      <option value="axis">Graph</option>
      <option value="histogram">Histogram</option>
    </select>
  )
}

export default ModeSelection