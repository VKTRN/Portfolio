import React from 'react'
import {Wrapper, Categories, Category} from './Controls.styles'
import {addCategory ,removeCategory ,changeName ,changeValue} from '../../../redux/slice.js'
import {useDispatch} from "react-redux"
import {useSelector} from 'react-redux'

export const Controls = () => {

  const handleAddCategory    = () => dispatch(addCategory())
  const handleRemoveCategory = () => dispatch(removeCategory())
  const handleChangeName     = (value, i) => dispatch(changeName({value: value, index:i}))
  const handleChangeValue    = (value, i) => dispatch(changeValue({value: value, index:i}))

  const dispatch   = useDispatch()
  const categories = useSelector(state => state.categories)

  return(
    <Wrapper>
      <button type='button' disabled={categories.length === 8} onClick={handleAddCategory}>add category</button>
      <button type='button' disabled={categories.length === 2} onClick={handleRemoveCategory}>remove category</button>
			<Categories>
				{
          categories.map((category, i) => {
            return(
              <Category>
                <input type="text"   value={category.name}  onChange = {(e) => handleChangeName(e.target.value, i)}></input>
                <input type="number" value={category.value} onChange = {(e) => handleChangeValue(e.target.value, i)}></input>
              </Category>
            )
          })
        }
      </Categories>
		</Wrapper> 
  )
}