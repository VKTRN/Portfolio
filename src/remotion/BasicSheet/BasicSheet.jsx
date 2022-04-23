import {useState} from 'react'
import _ from 'lodash';
import React from 'react';
import ReactDataSheet from 'react-datasheet'
import 'react-datasheet/lib/react-datasheet.css';
import {Wrapper} from './BasicSheet.styles.js'

function addRow(i,x,y){
  const row = [
    { readOnly: true, value: i+1 },
    { value: x },
    { value: y }
  ]
  
  return row
}

function makeGrid(data){
  const grid = []

  grid.push([
    { readOnly: true, value: '' },
    { value: 'X', readOnly: true },
    { value: 'Y', readOnly: true },
  ])

  data.forEach((item, i) => {
    grid.push(addRow(i, item.x, item.y))
  })

  return grid
}


export const BasicSheet = ({data, setData}) => {

  const [grid, setGrid] = useState(makeGrid(data))

  const valueRenderer = cell => cell.value

  const onCellsChanged = changes => {
    const grid_new = grid;
    changes.forEach(({ cell, row, col, value }) => {
      const newValue = parseFloat(value)
      console.log(newValue)
      grid_new[row][col] = { ...grid[row][col], value: newValue  };
    });

    console.log(grid_new)
    setGrid( grid_new );

    const new_data = []

    for (let i = 1; i < grid_new.length; i++) {
      new_data.push({x:grid_new[i][1].value, y:grid_new[i][2].value})
    }
    setData(new_data)
  }

  const onContextMenu = (e, cell, i, j) =>
    cell.readOnly ? e.preventDefault() : null;

  return (
    <Wrapper>
      <ReactDataSheet
        data={grid}
        valueRenderer={valueRenderer}
        onContextMenu={onContextMenu}
        onCellsChanged={onCellsChanged}
      />
    </Wrapper>
  )
}