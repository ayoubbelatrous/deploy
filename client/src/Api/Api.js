import axios from 'axios'
import store from '../store'

export default () => {
  return axios.create({
    baseURL: `http://35.181.54.50/api/`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }})
}