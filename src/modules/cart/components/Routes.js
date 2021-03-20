import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Cart from './Cart'
function Routes() {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={path}>
        <Cart />
      </Route>
    </Switch>
  )
}

export default Routes
