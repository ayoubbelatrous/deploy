import axios from 'axios'
import store from '../store'

export default () => {
  return axios.create({
    baseURL: `http://13.38.4.102/api/`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }})
}