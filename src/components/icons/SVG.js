import styled from 'styled-components'

const SVG = styled.svg`
  display: grid;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;

  :hover {
    fill: ${props => props.color || '#ff6347'};
  }
`
export default SVG
