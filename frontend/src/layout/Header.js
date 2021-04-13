import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="mt-4">
        <h1>Welcome to my APP</h1>
        <p>React + Django based Todo-list App</p>

        <span>
          <Link style={linkStyle} to="/">Home</Link> 
          {' '} | {' '}
          <Link style={linkStyle} to="/about">About</Link>
        </span><br />
      </header>
    )
  }
}

const linkStyle = {
  textDecoration: "none",
}

export default Header;