import React from 'react'
import Background from './Background'
import Container from './Container'
import H1 from './H1'
import { moveLeft, moveRight } from './Animations'

const Header = () => {
  return (
    <Background>
      <Container>
        <H1 fontSize="3rem" animation={moveLeft}>
          StyledUI
        </H1>
        <H1
          fontSize="1.4rem"
          animation={moveRight}
          letterSpacing=".3rem"
          fontWeight="300"
        >
          simplified css
        </H1>
      </Container>
    </Background>
  )
}

export default Header
