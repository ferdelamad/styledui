import styled from 'styled-components'

const UL = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: ${props => props.gap || '0px'};
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(80px, 60px));
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: ${props => props.justifyItems || ''};
`

export default UL
