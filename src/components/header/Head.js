import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Logo from './Logo'
import UL from './UL'
import Link from './Link'
import Github from '../icons/Github'
import Code from '../icons/Code'
import Twitter from '../icons/Twitter'

const Head = () => (
  <Header>
    <Logo>Styled UI</Logo>
    <div>
      <Nav>
        <UL gap="20px">
          <Link>Menu</Link>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Menu</Link>
        </UL>
      </Nav>
    </div>
    <div>
      <Nav>
        <UL gap="10px" justifyItems="center">
          <Github />
          <Code />
          <Twitter />
        </UL>
      </Nav>
    </div>
  </Header>
)

export default Head
