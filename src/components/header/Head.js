import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Logo from './Logo'
import UL from './UL'
import Link from './Link'
import Github from '../icons/Github'
import Code from '../icons/Code'
import Light from '../icons/Light'

const Head = () => (
  <Header>
    <Logo width="36" height="36" fill="#fff" />
    <Nav>
      <UL gap="20px">
        <Link>Home</Link>
        <Link>Buttons</Link>
        <Link>Layouts</Link>
        <Link>About</Link>
      </UL>
    </Nav>
    <Nav>
      <UL gap="10px" justifyItems="center">
        <Github href="https://github.com/ferdelamad/styledui" target="_blank" />
        <Code href="http://delamadrid.tech" target="_blank" />
        <Light />
      </UL>
    </Nav>
  </Header>
)

export default Head
