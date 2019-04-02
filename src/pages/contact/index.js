import React from 'react'


class Contact extends React.Component {

  render() {
    return (
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">
          This is how you can reach me
        </h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email: </span> Tyler.Mitchell.wx@gmail.com
          </div>
          <div>
            <span className="text-secondary">Phone: </span> (623) 271-3393
          </div>
          <div>
            <span className="text-secondary">Home: </span> Mesa, AZ
          </div>
        </div>
      </main>
    )
  }
}

export default Contact
