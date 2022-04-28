import React   				   from 'react'
import {useEffect} 			 from 'react'
import {Provider} 			 from 'react-redux'
import {useDispatch}		 from 'react-redux'
import store      			 from '../redux/store'
import {setState}        from '../redux/slice'
import {SequenceWrapper} from './SequenceWrapper'

export const SequenceProvider = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setState(data))
	}, [])

	return (
    <Provider store={store}>
      <SequenceWrapper/>
		</Provider>
	)
}