import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import { Home, About, Portfolio, Contact } from '../pages'


class Router extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={ Home } exact />
          <Route path='/about' component={ About } exact />
          <Route path='/portfolio' component={ Portfolio } exact />
          <Route path='/contact' component={ Contact } exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default hot(Router)
