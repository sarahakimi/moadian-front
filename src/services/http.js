import axios from 'axios'

axios.defaults.baseURL = '/api'

// axios.defaults.baseURL = 'https://api.zaminbar.ir/'
axios.defaults.baseURL = 'http://193.141.127.108:8001/'

const headers = {
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': '*'
  }
}

const http = {
  get: (url, config, isAuthenticated) => axios.get(url, {
    headers: {...headers.headers, ...isAuthenticated},
    params: config
  }),
  post: (url, config, isAuthenticated) =>
    axios.post(url, config, {headers: {...headers.headers, ...isAuthenticated}}),
  put: (url, config, isAuthenticated) =>
    axios.put(url, config, {headers: {...headers.headers, ...isAuthenticated}}),
  delete: (url, isAuthenticated) => axios.delete(url, {headers: {...headers.headers, ...isAuthenticated}})
}

export default http
