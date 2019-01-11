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

  :hover {
    color: #fff;
  }
`

const Logo = () => (
  <Container>
    <Magnet />
    <H1>StyledUI </H1>
  </Container>
)

export default Logo
