import React from 'react'
import Background from './Background'
import Container from './Container'
import H1 from './H1'

const Header = () => {
  return (
    <Background>
      <Container>
        <H1 fontSize="30px">StyledUI</H1>
        <H1 fontSize="14px" letterSpacing="2.85px" fontWeight="300">
          simplified css
        </H1>
      </Container>
    </Background>
  )
}

export default Header
