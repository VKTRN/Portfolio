import {createSlice} from '@reduxjs/toolkit'
import {makeData, getRanges} from '../functions.ts'

const data = makeData(16)

const slice = createSlice({
  name: 'data',
  initialState: {
    mode:'pie-chart',
    categories:[{name: "name", value: 5}, {name: "name", value: 5}, {name: "name", value: 5}],
    numerical: data,
    config: getRanges(data)
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload
    },
    addCategory: (state) => {
      state.categories = [...state.categories,{name: "text", value: 5}]
    },
    removeCategory: (state) => {
      state.categories = state.categories.slice(0,-1)
    },
    changeName: (state, action) => {
      const cats              = [...state.categories] // clone array
      cats[action.payload.index].name = action.payload.value // change i-th entry
      state.categories        = cats // set state
    },
    changeValue: (state, action) => {
      const cats               = [...state.categories] // clone array
      const newVal             = action.payload < 1? 1 : action.payload.value
      cats[action.payload.index].value = parseFloat(newVal) 
      state.categories         = cats // set state
    },
    setNumerical: (state, action) => {
      state.numerical = action.payload
    },
    setConfig: (state, action) => {
      state.config = action.payload
    }
  }
}) 

export const {setMode, addCategory, removeCategory, changeName, changeValue, setNumerical, setConfig} = slice.actions
export default slice.reducer