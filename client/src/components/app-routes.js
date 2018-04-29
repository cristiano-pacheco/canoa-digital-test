import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from './not-found'
import VehicleList from './vehicle/list'
import VehicleForm from './vehicle/form'

const AppRoutes = () => (
  <Switch>
    <Route exact path='/' component={VehicleList} />
    <Route path='/add' component={VehicleForm} />
    <Route path='/edit/:id' component={VehicleForm} />
    <Route component={NotFound} />
  </Switch>
)

export default AppRoutes
