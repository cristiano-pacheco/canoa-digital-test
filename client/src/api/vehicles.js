import http from '../services/http'

export const getAll = () => http.get('/vehicles')
export const get = id => http.get(`/vehicles/${id}`)
export const create = data => http.post('/vehicles', data)
export const update = (id, data) => http.put(`/vehicles/${id}`, data)
export const remove = id => http.delete(`/vehicles/${id}`)
