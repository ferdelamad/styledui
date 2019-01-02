import styled from 'styled-components'

const H1 = styled.h1`
  display: block;
  color: ${props => props.color || '#fff'};
  text-transform: uppercase;
  font-family: ${props => props.fontFamily || 'Arial'};
  font-weight: ${props => props.fontWeight || '400'};
  font-size: ${props => props.fontSize || '1.6rem'};
  letter-spacing: ${props => props.letterSpacing || '0rem'};
  animation: ${props => props.animation || ''} 0.4s;
  margin-bottom: 0.3rem;
`

export default H1
