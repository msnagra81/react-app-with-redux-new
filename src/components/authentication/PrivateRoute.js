import React,{Component} from 'react'
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route auth {...rest} render={(props) => (
      auth ? <Component {...props} /> : <Redirect to='/login' />
    )} />
  )