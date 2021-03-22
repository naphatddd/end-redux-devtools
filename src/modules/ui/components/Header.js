import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Link,
  FormControlLabel,
  Badge,
  Switch,
  IconButton,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import logo from 'assets/image/logo.png'
import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
  },
  logoImage: {
    width: 35,
    height: 35,
  },
  logoLink: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    flexGrow: 1,
  },
}))
function Header() {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const navigateToCart = () => history.push('/cart')
  const toggleDarkMode = () => dispatch(actions.toggleDarkMode())
  const darkMode = useSelector((state) => state.ui.darkMode)
  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            underline="none"
            className={classes.logoLink}
          >
            <img src={logo} alt="Naphat" className={classes.logoImage} />
          </Link>
          <Link
            component={RouterLink}
            to="/products"
            color="inherit"
            underline="none"
          >
            Products
          </Link>
          <div className={classes.spacer}></div>
          <FormControlLabel
            control={
              <Switch
                color="secondary"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
            }
            label="Dark"
          ></FormControlLabel>
          <IconButton color="inherit" onClick={navigateToCart}>
            <Badge badgeContent={5} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
