import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CssBaseline, useMediaQuery } from '@material-ui/core'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import Header from './Header'
import Content from './Content'
import * as actions from '../actions'
function Layout() {
  const prefersDarkMode = useMediaQuery('(prefers-color-schema: light)')
  const darkMode = useSelector((state) => state.ui.darkMode)
  const dispatch = useDispatch()
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#bae8e8',
      },
    },
  })
  useEffect(() => {
    const action = actions.setDarkMode(prefersDarkMode)
    dispatch(action)
  }, [prefersDarkMode, dispatch])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Content />
    </ThemeProvider>
  )
}

export default Layout
