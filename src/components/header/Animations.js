import { keyframes } from 'styled-components'

export const moveLeft = keyframes`
  0% {
    transform: translateX(-80px);
  }

  75% {
    transform: translateX(10px);
  }

  100% {
    transform: translate(0);
  }
`

export const moveRight = keyframes`
  0% {
    transform: translateX(80px);
  }

  75% {
    transform: translateX(-10px);
  }

  100% {
    transform: translate(0);
  }
`
