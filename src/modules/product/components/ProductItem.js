import React from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import {
  Grid,
  Card,
  Chip,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import currencyFormat from 'utils/currencyFormat'
const useStyles = makeStyles((theme) => ({
  media: {
    height: 150,
  },
  footer: {
    marginTop: theme.spacing(2),
  },
}))
function ProductItem({ id, name, desc, image, category, price }) {
  const classes = useStyles()
  const { path } = useRouteMatch()
  const history = useHistory()
  const navigateToDetails = () => history.push(`${path}/${id}`)
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card onClick={navigateToDetails}>
        <CardActionArea>
          <CardMedia image={image} title={name} className={classes.media} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              className={classes.footer}
            >
              <span>{currencyFormat(price)})</span>
              <Chip label={category} size="small" />
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProductItem
