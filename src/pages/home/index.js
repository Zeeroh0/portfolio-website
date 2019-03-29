import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component {

  render() {
    return (
      <div>
        Home Page
        <br/>
        <Link to='/about' >About</Link>
        <Link to='/portfolio' >Portfolio</Link>
        <Link to='/contact' >Contact</Link>
      </div>
    )
  }
}

export default Home
