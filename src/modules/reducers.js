import { combineReducers } from 'redux'

import ui from 'modules/ui/reducer'
import product from 'modules/product/reducer'
import cart from 'modules/cart/reducer'

export default combineReducers({
  ui,
  product,
  cart,
})
