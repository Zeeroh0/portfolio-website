import React from 'react'


class Portfolio extends React.Component {

  render() {
    return (
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">
          Check out some of my projects
        </h2>

        <div className="projects">
          {/*
            Roller derby
            flight app
            weather game
            burger CRUD app
            friend finder app
            listening for engineers talk
            career day talk
          */}
          <div className="item">
            <a href="https://peaceful-spire-97933.herokuapp.com/" target="_blank" >
              <img src="assets/img/projects/project1.jpg" alt="Roller Derby Stat Tracker" />
            </a>
            <a className="btn-light" href="https://peaceful-spire-97933.herokuapp.com/" target="_blank" >
              <i className="fas fa-skating"></i> Roller Derby Stat Tracker
            </a>
            <a className="btn-dark" href="https://github.com/Zeeroh0/RD-Stats-Master" target="_blank" >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="item">
            <a href="https://nexgen-calcs.herokuapp.com/" target="_blank" >
              <img src="assets/img/projects/project2.jpg" alt="NexGen Calc "/>
            </a>
            <a className="btn-light" href="https://nexgen-calcs.herokuapp.com/" target="_blank" >
              <i className="fas fa-plane-departure"></i> NexGen Calc
            </a>
            <a className="btn-dark" href="https://github.com/Zeeroh0/NexGen-Calc" target="_blank" >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="item">
            <a href="https://zeeroh0.github.io/TriviaGame/" target="_blank" >
              <img src="assets/img/projects/project3.jpg" alt="Weather Quiz "/>
            </a>
            <a className="btn-light" href="https://zeeroh0.github.io/TriviaGame/" target="_blank" >
              <i className="fas fa-cloud-rain"></i> Weather Quiz
            </a>
            <a className="btn-dark" href="https://github.com/Zeeroh0/TriviaGame">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="item">
            <a href="http://uttermost-fish.surge.sh/#/" target="_blank" >
              <img src="assets/img/projects/project4.jpg" alt="Talk: Listening "/>
            </a>
            <a className="btn-light" href="http://uttermost-fish.surge.sh/#/" target="_blank" >
              <i className="fas fa-assistive-listening-systems"></i> Listening for Engineers
            </a>
            <a className="btn-dark" href="https://github.com/Zeeroh0">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          {/*
            <div className="item">
              <a href="#!" target="_blank" >
                <img src="assets/img/projects/project5.jpg" alt="Project 5 "/>
              </a>
              <a className="btn-light" href="#">
                <i className="fas fa-eye"></i> Project
              </a>
              <a className="btn-dark" href="#">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
          */}
        </div>
      </main>

    )
  }
}

export default Portfolio
