import React   				    from 'react'
import {Provider} 			  from 'react-redux'
import store      			  from '../redux/store'
import {SequenceWrapper2} from './SequenceWrapper2'

export const SequenceProvider = (data) => {

	return (
    <Provider store={store}>
      <SequenceWrapper2 data = {data}/>
		</Provider>
	)
}