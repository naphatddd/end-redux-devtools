import React from 'react'
import { Container, Snackbar, Toolbar, Button } from '@material-ui/core'
import Routes from './Routes'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  content1: {
    padding: theme.spacing(2, 0),
  },
}))
function Content() {
  const classes = useStyles()
  return (
    <main className={classes.content1}>
      <Container maxWidth="lg">
        <Toolbar />
        <Routes />
        <Snackbar
          open
          message="hello"
          action={
            <Button color="inherit" size="small">
              Close
            </Button>
          }
        ></Snackbar>
      </Container>
    </main>
  )
}

export default Content
