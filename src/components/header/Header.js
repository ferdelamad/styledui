import React from 'react'
import Background from './Background'
import Container from './Container'
import H1 from './H1'
import { moveLeft, moveRight } from './Animations'

const Header = () => {
  return (
    <Background>
      <Container>
        <H1 fontSize="30px" animation={moveLeft}>
          StyledUI
        </H1>
        <H1
          fontSize="14px"
          animation={moveRight}
          letterSpacing="2.85px"
          fontWeight="300"
        >
          simplified css
        </H1>
      </Container>
    </Background>
  )
}

export default Header
