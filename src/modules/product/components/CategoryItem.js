import React from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { Grid, Chip } from '@material-ui/core'
function CategoryItem({ Icon, title }) {
  const { path } = useRouteMatch()
  const history = useHistory()
  const filter = () => history.push(`${path}?category=${title}`)
  return (
    <Grid item onClick={filter}>
      <Chip icon={<Icon />} label={title} clickable color="primary"></Chip>
    </Grid>
  )
}

export default CategoryItem
