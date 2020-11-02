import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>Site Title</h1>
      <nav>
        <ul>
          <li>
            <Link className={headerStyles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.link} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={headerStyles.link} to="/about">
              About Me
            </Link>
          </li>
          <li>
            <Link className={headerStyles.link} to="/contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
