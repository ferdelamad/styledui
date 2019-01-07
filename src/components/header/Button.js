import styled from 'styled-components'

const Button = styled.button`
  display: grid;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background-color: transparent;
  text-transform: uppercase;
  padding: 1.2rem;
  border-radius: 0.5rem;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;

  :hover {
    color: tomato;
    border: 1px solid tomato;
  }
`

export default Button
