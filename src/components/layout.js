import React from 'react'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `8rem 1.0875rem 1.45rem`,
        paddingTop: `10vh`,
        backgroundColor: `#41a7b3`,
      }}
    >
      {children}
      <footer>
        © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </>
)

export default Layout
