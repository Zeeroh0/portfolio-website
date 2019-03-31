import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import Layout from './Layout'
import { Home, About, Portfolio, Contact } from '../pages'


class Router extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={ Home } exact />
          <Layout path='/about' component={ About } exact />
          <Layout path='/portfolio' component={ Portfolio } exact />
          <Layout path='/contact' component={ Contact } exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default hot(Router)
