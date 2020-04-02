import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container flex">
      <h1>{siteTitle}</h1>

      <div>
        <a href="#form" className="btn get-started">
          Get Started
        </a>
      </div>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
