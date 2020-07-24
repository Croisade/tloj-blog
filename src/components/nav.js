import React from 'react'
import { Link } from 'react-router-dom'
import '@/styles/nav.scss'

function About() {
  return (
    <nav className="pt-navbar">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading">TLOJ</div>
        <input
          className="pt-input"
          placeholder="Search Site..."
          type="text"
        />
      </div>
      <div className="pt-navbar-group pt-align-right">
        <Link className="pt-button pt-minimal pt-icon-music" to="/about">About
        </Link>
        <span className="pt-navbar-divider" />
        <button className="pt-button pt-minimal pt-icon-user" />
        <button className="pt-button pt-minimal pt-icon-cog" />
      </div>

    </nav>
  )
}

export default About
