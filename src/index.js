/* LIBRARIES */
import React from 'react'
import ReactDOM from 'react-dom'

/* CONFIGURATION */


/* STYLING */
import 'normalize.css/normalize.css'
import './styles/styles.scss'

/* ROUTING & APP */
import Router from './routing/Router'


const FinalApp = () => (
  <Router />
)
const target = document.getElementById('app')

ReactDOM.render(<FinalApp/>, target)
