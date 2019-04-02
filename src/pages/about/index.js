import React from 'react'


class About extends React.Component {

  render() {
    return (
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">
          Let me tell you a few things...
        </h2>
    
        <div className="about-info">
          <img className="bio-image" src="/assets/img/portraits/tyler/portrait-tyler.jpg" alt="John Doe" />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Born and raised in Phoenix, AZ, Tyler Mitchell is a Software Engineer with a passion for connecting with people, personal development, and non-stop learning.
            </p>
            <p>
              Tyler works in sunny Scottdale, AZ and lives in Mesa with his amazing wife, Vanessa, and their pet dog and cat, Charlie and Harvey.
            </p>
          </div>
          <div className="job job-1">
            <h3>Software Engineer</h3>
            <a href="http://awolff.com/" target="_blank" >
              <h6>The Wolff Company</h6>
            </a>
              <p>
              Working avidly in the Business Intelligence department, Tyler and his team design and build problem solving apps internally for The Wolff Company.  Tyler has lead the charge in bringing React to the team's stack and is constantly making the best use of cutting edge technologies to build world class apps for finance and real estate.  The team's stack revolves around a React front end, using a mix of REST and GraphQL APIs built in .Net Core using a MSSQL database.  He often meets with clients directly and frequently to detail the scope of requests and follow up for feedback throughout development.
            </p>
          </div>
          <div className="job job-2">
            <h3>Bootcamp Graduate</h3>
            <a href="https://bootcamp.ce.arizona.edu/coding/curriculum/" target="_blank" >
              <h6>University of Arizona's Full Stack Web Developer Bootcamp</h6>
            </a>
            <p>
              Tyler is a proud graduate of the UA Coding Bootcamp.  While attending this 6 month, full stack bootcamp, Tyler lead multiple collaborative projects, tutored his peers, and learned the numerous web technologies including React, Redux, SASS, jQuery, REST APIs, Node.js, MySQL, and multiple databases such as MySQL, Firebase, and MongoDB.
            </p>
            <p>
              While a student in this fast paced bootcamp, Tyler lead challenging projects such as buidling a flight calculator for pilots and a stat recorder for a local women's roller derby league.  Be sure to check out his list of projects to see more! 
            </p>
          </div>
          <div className="job job-3">
            <h3>Finance Background</h3>
            <h6>Wells Fargo and Flagship Credit Acceptance</h6>
            <p>
              Prior to discovering his love for coding, Tyler lead a decorated career in personal finance and loan underwriting.  He won numerous awards for sales and customer service and earned several promotions during his tenure as a Personal Banker and Credit Analyst at Wells Fargo.
            </p>
            <p>
              Following that, Tyler excelled as a leader at FCA working as a Loan Underwriter.  His analytical skills and attention to technical details enabled him to be a top producing underwriter month after month; his strong communication and people skills and technical knowledge put him in place to train numerous new underwriters and staff.
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default About
