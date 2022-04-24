import React from 'react'
import {Wrapper, Categories, Category} from './Controls.styles'

export const Controls = ({categories, setCategories}) => {

  const addCategory = () => {
    setCategories([...categories,{name: "text", value: 5}])
  }

  const removeCategory = () => {
    setCategories(categories.slice(0,-1))
  }

  const changeName = (value, i) => {
    const cats = [...categories] // clone array
    cats[i].name = value // change i-th entry
    setCategories(cats) // set state
  }

  const changeValue = (value, i) => {
    const cats = [...categories]
    const newVal = value < 1? 1 : value
    cats[i].value = parseFloat(newVal) 
    setCategories(cats)
  }

  return(
    <Wrapper>
      <button type='button' disabled={categories.length === 8} onClick={addCategory}>add category</button>
      <button type='button' disabled={categories.length === 2} onClick={removeCategory}>remove category</button>
     
			<Categories>
				{
          categories.map((category, i) => {
            return(
              <Category>
                <input type="text"   value={category.name}  onChange = {(e) => changeName(e.target.value, i)}></input>
                <input type="number" value={category.value} onChange = {(e) => changeValue(e.target.value, i)}></input>
              </Category>
            )
          })
        }
      </Categories>
		</Wrapper> 
  )
}