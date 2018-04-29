import axios from 'axios'

import { API_URL } from '../../config'

const http = axios.create({
  baseURL: API_URL,
  timeout: 4000
})

export default http
