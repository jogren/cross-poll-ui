import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="Header">
      <img alt="lotus-flower" id="lotus-header" src={require('../assets/lotus-flower.svg')} />
      <h1 id="text-header">SafeSpace</h1>
    </section>
  )
}

export default Header;