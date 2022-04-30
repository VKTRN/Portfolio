import React            from 'react'
import {useDispatch}    from 'react-redux'
import {useSelector}    from 'react-redux'
import {addCategory}    from '../../../redux/slice.ts'
import {removeCategory} from '../../../redux/slice.ts'
import {changeName}     from '../../../redux/slice.ts'
import {changeValue}    from '../../../redux/slice.ts'
import {Wrapper}        from './Controls.styles'
import {Categories}     from './Controls.styles'
import {Category}       from './Controls.styles'

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