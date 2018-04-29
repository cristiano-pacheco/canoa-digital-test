import http from '../services/http'

export const getVehicles = () => http.get('/vehicles')
