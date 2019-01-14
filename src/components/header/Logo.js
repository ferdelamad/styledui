import React from 'react'
import styled from 'styled-components'
import Magnet from '../icons/Magnet'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const H1 = styled.h1`
  color: tomato;
  transition: all 0.5s ease;
  font-family: 'Poppins', sans-serif;
  padding-left: 0.5rem;
  cursor: pointer;
  font-size: ${props => props.fontSize || '3rem'};

  :hover {
    color: ${props => props.colorHover || '#fff'};
  }
`

const Logo = props => (
  <Container>
    <Magnet {...props} />
    <H1 fontSize={props.fontSize} colorHover={props.colorHover}>
      StyledUI{' '}
    </H1>
  </Container>
)

export default Logo
