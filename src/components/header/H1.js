import styled from 'styled-components'

const H1 = styled.h1`
  display: block;
  color: ${props => props.color || '#fff'};
  text-transform: uppercase;
  font-family: ${props => props.fontFamily || 'Arial'};
  font-weight: ${props => props.fontWeight || '400'};
  font-size: ${props => props.fontSize || '16px'};
  letter-spacing: ${props => props.letterSpacing || '0px'};
`

export default H1
