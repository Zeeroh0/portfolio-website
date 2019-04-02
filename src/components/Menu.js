import React from 'react'
import { Link } from 'react-router-dom'


class NavMenu extends React.Component {
  state = {
    showMenu: false,
  }

  handleMenuClick = () => {
    this.setState({ showMenu: !this.state.showMenu })    
  }

  handleLinkClick = () => {
    this.setState({ showMenu: false })
  }

  render() {
    const { showMenu } = this.state;

    return (
      <header>
        <div className={`menu-btn ${showMenu ? 'close' : ''}`} onClick={this.handleMenuClick} >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
    
        <nav className={`menu ${showMenu ? 'show' : ''}`}>
          <div className={`menu-branding ${showMenu ? 'show' : ''}`}>
            <div className="portrait"></div>
          </div>
          <ul className={`menu-nav ${showMenu ? 'show' : ''}`}>
            <li className={`nav-item ${showMenu ? 'show' : ''}`}>
              <Link to="/" className="nav-link" onClick={this.handleLinkClick} >
                Home
              </Link>
            </li>
            <li className={`nav-item ${showMenu ? 'show' : ''}`}>
              <Link to="/about" className="nav-link" onClick={this.handleLinkClick} >
                About
              </Link>
            </li>
            <li className={`nav-item ${showMenu ? 'show' : ''}`}>
              <Link to="/portfolio" className="nav-link" onClick={this.handleLinkClick} >
                Portfolio
              </Link>
            </li>
            <li className={`nav-item ${showMenu ? 'show' : ''}`}>
              <Link to="/contact" className="nav-link" onClick={this.handleLinkClick} >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavMenu
