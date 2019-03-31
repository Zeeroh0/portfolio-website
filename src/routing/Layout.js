import React from 'react'
import { Route } from 'react-router-dom'

import { Menu, Footer } from '../components'


const Layout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <React.Fragment>
        <Menu />
        <div className='content' >
          <Component {...props} />
        </div>
        <Footer />
      </React.Fragment>
    )}
  />
)

export default Layout
