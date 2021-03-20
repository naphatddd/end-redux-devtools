import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Paper, Typography, ButtonGroup, Button } from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  content: {
    height: '100%',
  },
  amountContainer: {
    marginBottom: theme.spacing(2),
  },
  amount: {
    padding: theme.spacing(0, 2),
  },
}))
function ProductDetails() {
  const { id } = useParams()
  const theme = useTheme()
  const history = useHistory()
  const isMediumIp = useMediaQuery(theme.breakpoints.up('md'))
  const classes = useStyles()
  const [products, setProducts] = useState([])
  const byeNow = () => history.push('/cart')
  useEffect(() => {
    const loadProduct = async () => {
      const { data } = await axios.get(
        `https://react-api-six.vercel.app/products/${id}`
      )
      console.log(data)
      setProducts(data)
    }
    loadProduct()
  }, [id])
  return (
    <Paper className={classes.root}>
      <Grid
        container
        spacing={2}
        justify={isMediumIp ? 'flex-start' : 'center'}
      >
        <Grid item>
          <img src={products.image} alt={products.name} />
        </Grid>
        <Grid item>
          <Grid
            container
            className={classes.content}
            direction="column"
            justify="space-between"
          >
            <Grid item>
              <Typography variant="h4" component="h1">
                {products.name}
              </Typography>
              <p>{products.desc}</p>
            </Grid>
            <Grid item>
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="primary button group"
              >
                <Button onClick={byeNow}>Bye Now</Button>
                <Button>Add To Cart</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProductDetails
