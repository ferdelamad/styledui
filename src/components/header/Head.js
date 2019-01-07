import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Button from './Button'
import Logo from './Logo'

const Head = () => (
  <Header>
    <Logo>Styled UI</Logo>
    <Nav>
      <Button>Buttons</Button>
      <Button>Layouts</Button>
      <Button>Animations</Button>
    </Nav>
  </Header>
)

export default Head
