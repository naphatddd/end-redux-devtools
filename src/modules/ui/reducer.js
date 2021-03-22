import { TOGGLE_DARK_MODE, SET_DARK_MODE } from './actions'

const initialState = {
  darkMode: false,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode }
    case SET_DARK_MODE:
      return { ...state, darkMode: action.payload.darkMode }
    default:
      return state
  }
}

export default reducer
