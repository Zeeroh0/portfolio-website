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
        <div class={`menu-btn ${showMenu ? 'close' : ''}`} onClick={this.handleMenuClick} >
          <div class="btn-line"></div>
          <div class="btn-line"></div>
          <div class="btn-line"></div>
        </div>
    
        <nav class={`menu ${showMenu ? 'show' : ''}`}>
          <div class={`menu-branding ${showMenu ? 'show' : ''}`}>
            <div class="portrait"></div>
          </div>
          <ul class={`menu-nav ${showMenu ? 'show' : ''}`}>
            <li class={`nav-item ${showMenu ? 'show' : ''}`}>
              <Link to="/" class="nav-link" onClick={this.handleLinkClick} >
                Home
              </Link>
            </li>
            <li class={`nav-item ${showMenu ? 'show' : ''}`}>
              <Link to="/about" class="nav-link" onClick={this.handleLinkClick} >
                About
              </Link>
            </li>
            <li class={`nav-item ${showMenu ? 'show' : ''}`}>
              <Link to="/portfolio" class="nav-link" onClick={this.handleLinkClick} >
                Portfolio
              </Link>
            </li>
            <li class={`nav-item ${showMenu ? 'show' : ''}`}>
              <Link to="/contact" class="nav-link" onClick={this.handleLinkClick} >
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
