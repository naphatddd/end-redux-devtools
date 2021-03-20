import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@material-ui/core'
import {
  TextField,
  CardActions,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  form: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  submitBtn: {
    flex: 1,
  },
}))
function Delivery() {
  const classes = useStyles()
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        address: yup.string().required(),
      })
    ),
  })
  const submitForm = async (data, e) => {
    const resp = await axios.post('http://127.0.0.1:3000/api/form', {
      name: data.name,
      email: data.email,
      address: data.address,
    })
    e.preventDefault()
    e.target.reset()
    alert(resp.data.message)
    history.replace('/cart')
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)} autoComplete="off">
        <Card>
          <CardContent className={classes.form}>
            <Typography>Order Information</Typography>
            <TextField
              inputRef={register}
              variant="outlined"
              name="name"
              label="name"
              placeholder="Enter your name"
              fullWidth
              helperText={errors.name?.message || ''}
              error={!!errors.name}
            />
            <TextField
              inputRef={register}
              variant="outlined"
              name="email"
              label="email"
              placeholder="Enter your email"
              fullWidth
              helperText={errors.email?.message || ''}
              error={!!errors.email}
            />
            <TextField
              inputRef={register}
              multiline
              rows={4}
              variant="outlined"
              name="address"
              label="address"
              placeholder="Enter your address"
              fullWidth
              helperText={errors.address?.message || ''}
              error={!!errors.address}
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitBtn}
            >
              Place Order
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  )
}

export default Delivery
