import React      from "react"
import {Provider} from 'react-redux'
import store      from '../redux/store'
import {SequenceWrapper} from './SequenceWrapper'

export const SequenceProvider = () => {

	return (
    <Provider store={store}>
      <SequenceWrapper/>
		</Provider>
	)
}