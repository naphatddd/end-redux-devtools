import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import ProductList from './ProductList'

function Routes() {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/:id`}>
        <ProductDetails />
      </Route>
      <Route path={path}>
        <ProductList />
      </Route>
    </Switch>
  )
}

export default Routes
