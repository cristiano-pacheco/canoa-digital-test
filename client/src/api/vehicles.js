import http from '../services/http'

export const getVehicles = () => http.get('/vehicles')
export const createVehicle = data => http.post('/vehicles', data)
