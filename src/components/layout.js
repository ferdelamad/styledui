import React from 'react'
import './layout.css'
import Header from '../components/header/Head'
import Body from '../components/body/body'
import Main from '../components/body/main'
// import Logo from '../components/header/Logo'

const Layout = ({ children }) => (
  <>
    <Header />
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `8rem 1.0875rem 1.45rem`,
        paddingTop: `25vh`,
        backgroundColor: `#fff`,
      }}
    > */}
    <Body>
      <Main />
      {children}
      <footer>
        © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Body>
  </>
)

export default Layout
