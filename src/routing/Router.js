import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import { HomePage } from '../pages'


class Router extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={ HomePage } exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default hot(Router)
