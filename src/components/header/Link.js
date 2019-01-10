import styled from 'styled-components'

const A = styled.a`
  text-decoration: none;
  display: grid;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background-color: transparent;
  text-transform: uppercase;
  padding: 1rem;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    color: ${props => props.color || 'tomato'};
    border: 1px solid tomato;
    background: ${props => props.background || 'transparent'};
  }
`

export default A
