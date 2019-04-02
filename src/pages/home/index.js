import React from 'react'

import { Menu } from '../../components'


class Home extends React.Component {

  componentDidMount() {
    const _body = document.querySelector("body")
    _body.classList.add("bg-img")
  }

  componentWillUnmount() {
    const _body = document.querySelector("body")
    _body.classList.remove("bg-img")
  }

  render() {
    return (
      <div>
        <Menu />
        <main id="home">
          <h1 className="lg-heading">
            Tyler <span className="text-secondary">Mitchell</span>
          </h1>
          <h2 className="sm-heading">
            Web Developer, Software Engineer, Weather Enthusiast
          </h2>
          <div className="icons">
            <a href="https://github.com/Zeeroh0" target="_blank" >
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/tyler-mitchell-wx/" target="_blank" >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/Tyler_WX" target="_blank" >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </main>
      </div>
    )
  }
}

export default Home
