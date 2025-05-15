import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2>Sofia</h2>
      <ul>
        <li><a href="#projects">Projekt</a></li>
        <li><a href="#about">Om mig</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  )
}

export default Navbar