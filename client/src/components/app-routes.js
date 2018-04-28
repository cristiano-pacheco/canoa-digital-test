import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './home'
import NotFound from './not-found'

const AppRoutes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default AppRoutes
