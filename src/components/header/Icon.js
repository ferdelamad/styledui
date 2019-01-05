import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
  display: flex;
  width: 1rem;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  transition: background-color 150ms;

  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

const A = styled.a`
  color: #fff;
  font-size: ${props => props.fontSize || '1.6 rem'};
  border-radius: 100%;
  padding: 1rem;
  flex: 1;
  margin-left: auto;
  margin-right: auto;
`

const Icon = props => (
  <IconContainer>
    <A>{props.children}</A>
  </IconContainer>
)

export default Icon
