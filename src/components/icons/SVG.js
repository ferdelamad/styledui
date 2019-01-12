import React from 'react'
import styled from 'styled-components'

const SVGIcon = styled.svg`
  display: grid;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;

  :hover {
    fill: ${props => props.color || '#ff6347'};
  }
`
const SVG = props => {
  const { href, target, children } = props
  return (
    <a href={href} target={target}>
      <SVGIcon {...props}>{children}</SVGIcon>
    </a>
  )
}

export default SVG
