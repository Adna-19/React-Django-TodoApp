import React from 'react'
import AboutImage from '../images/black_panther.jpg'

export default function About() {
  return (
    <div className="container mt-4">
      <div class="card w-75 mx-auto">
        <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">React + Django Based Todo List APP</h5>
          <img src={AboutImage} className="img-thumbnail w-50" />
          <p class="card-text w-50 mx-auto">I created this APP using Django as Backend and React
            as Frontend. This is my first live App on Heroku.</p>

          <h5>You can find me on:</h5>
          <a href="https://www.instagram.com/adil_saleem19/"
            className="btn btn-sm btn-danger">
            instagram
          </a> <br />
          OR
          <p className="lead">adilsaleem1398@gmail.com</p>

        </div>
      </div>
    </div>
  )
}
