import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import querystring from 'query-string'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CategoryList from './CategoryList'
import ProductItem from './ProductItem'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}))
function ProductList() {
  const classes = useStyles()
  const { search } = useLocation()
  const { category } = querystring.parse(search)
  const [products, setProducts] = useState([])
  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await axios.get(
        `https://react-api-six.vercel.app/products${search}`
      )
      setProducts(data)
    }
    loadProducts()
  }, [search])
  return (
    <>
      <Typography variant="h3" component="h2" className={classes.title}>
        {category || 'All'} Product
      </Typography>
      <CategoryList />
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductItem key={product.id} {...product}></ProductItem>
        ))}
      </Grid>
    </>
  )
}

export default ProductList
