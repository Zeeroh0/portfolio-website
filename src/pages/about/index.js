import React from 'react'
import { Link } from 'react-router-dom'


class About extends React.Component {

  render() {
    return (
      <div>
        About Page
        <br/>
        <Link to='/' >Home</Link>
      </div>
    )
  }
}

export default About
