import {createSlice}   from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'
import {makeData}      from '../functions'
import {getRanges}     from '../functions'
import {State}         from '../functions'
import {Position}      from '../functions'
import {PlotConfig}    from '../functions'

// const data = makeData(-10,10)
const data = makeData(0,20)
// const data = makeData(-10,10)
// const data = makeData(-15, 0)
// const data = makeData(-15,-5)

const state: State = {
  mode:'pie-chart',
  categories:[{name: "name", value: 5}, {name: "name", value: 5}, {name: "name", value: 5}],
  numerical: data,
  config: getRanges(data)
}

const reducers = {
  setState: (state, action: PayloadAction<State>) => {
    state.mode = action.payload.mode
    state.categories = action.payload.categories
    state.numerical = action.payload.numerical
    state.config = action.payload.config
  },
  setMode: (state, action: PayloadAction<string>) => {
    state.mode = action.payload
  },
  addCategory: (state) => {
    state.categories = [...state.categories,{name: "text", value: 5}]
  },
  removeCategory: (state) => {
    state.categories = state.categories.slice(0,-1)
  },
  changeName: (state, action: PayloadAction<{value: string, index: number}>) => {
    const cats              = [...state.categories] // clone array
    cats[action.payload.index].name = action.payload.value // change i-th entry
    state.categories        = cats // set state
  },
  changeValue: (state, action: PayloadAction<{value: number, index:number}>) => {
    const cats               = [...state.categories] // clone array
    const newVal             = action.payload.value < 1? 1 : action.payload.value
    cats[action.payload.index].value = Math.floor(newVal)  
    state.categories         = cats // set state
  },
  setNumerical: (state, action: PayloadAction<Position[]>) => {
    state.numerical = action.payload
  },
  setConfig: (state, action: PayloadAction<PlotConfig>) => {
    state.config = action.payload
  }
}

const slice = createSlice({ name: 'data', initialState: state, reducers: reducers}) 

export const {setMode, addCategory, removeCategory, changeName, changeValue, setNumerical, setConfig, setState} = slice.actions
export default slice.reducer