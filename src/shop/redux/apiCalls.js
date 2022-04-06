import {loginFailure, loginStart, loginSuccess} from './userRedux'
import { publicRequest } from '../requestMethods'
import axios from 'axios'

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    // const res = await publicRequest.post('/auth/login', user)
    const res = await axios.post('https://vktrn.com/api/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (error) {
    dispatch(loginFailure())
  }
}