import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductRoute from 'modules/product/components/Routes'
import CartRoute from 'modules/cart/components/Routes'

function Routes() {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/products">
        <ProductRoute />
      </Route>
      <Route path="/cart">
        <CartRoute />
      </Route>
    </Switch>
  )
}

export default Routes
