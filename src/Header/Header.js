import React, { useEffect } from 'react'
import Link from '../components/Link'
import '../style/Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="ui secondary pointing menu">
          <Link href="/" className="item">
            Home
          </Link>

          <Link href="/news" className="item">
            News
          </Link>

          <Link href="/my-coins" className="item">
            My Coins
          </Link>

          <Link href="/about" className="item">
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
