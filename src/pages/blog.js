import React from 'react'

import Layout from '../components/layout'

export default function Blog() {
  return (
    <Layout>
      <h1>Projects</h1>
      <br />


    <div class="box">
      <h4>Quote Generator</h4>
      <img src="splurty.png" class="full-width" />
      <p>
          A database-powered quote generator with a mobile-first design, using the Ruby on Rails framework, HTML, and CSS. Uses Git and GitHub for version control, and launched
          on Heroku.
      </p>
      <br />
      <a href="https://splurty-bryan-roof.herokuapp.com/" class="myButton">Web Application</a>
      <a href="https://github.com/broof716/Bryan-Roof" class="myButton">Github</a>
    </div>

    <div class="box">
      <h4>Yelp Clone</h4>
      <img src="nomster.png" class="full-width" />
      <p>
        A Yelp clone that integrates with the Google Maps API and includes features like user comments, star ratings, image uploading, and user authentication.
      </p>
      <br />
      <a href="https://nomster-bryan-roof.herokuapp.com/" class="myButton">Web Application</a>
      <a href="https://github.com/broof716/nomster" class="myButton">Github</a>
    </div>
    <br class="clear" />

    <div class="box">
      <h4>Two-Sided Market Place</h4>
      <img src="flixter.png" class="full-width" />
      <p>
        A two-sided, video-streaming marketplace platform that features credit card payment capabilities, user role management, complex user interfaces, and advanced database relationships.
      </p>
      <br />
      <a href="https://flixter-bryan-roof.herokuapp.com/" class="myButton">Web Application</a>
      <a href="https://github.com/broof716/flixter" class="myButton">Github</a>
    </div>
    <div class="box">
      <h4>Test Driven Development</h4>
      <img src="grammable.png" class="full-width" />
      <p>
        An Instagram clone that was built using industry-standard, test-driven development following numerous red/green/refactor cycles.
      </p>
      <br />
      <a href="https://grammabled-bryan-roof.herokuapp.com/" class="myButton">Web Application</a>
      <a href="https://github.com/broof716/grammabled" class="myButton">Github</a>
    </div>
    <br class="clear" />
    <div class="box">
      <h4>Single Page Todo Application</h4>
      <img src="todoster.png" class="full-width" />
      <p>
        This single-page to-do application features a
        fluid user interface that– by using JavaScript– allows users to rapidly add dynamic content.
      </p>
      <br />
      <a href="https://todo-bryan-roof.herokuapp.com/" class="myButton">Web Application</a>
      <a href="https://github.com/broof716/todo" class="myButton">Github</a>
    </div>
    </Layout>
  )
}

