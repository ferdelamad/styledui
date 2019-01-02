import { keyframes } from 'styled-components'

export const moveLeft = keyframes`
  0% {
    transform: translateX(-8rem);
  }

  75% {
    transform: translateX(1rem);
  }

  100% {
    transform: translate(0);
  }
`

export const moveRight = keyframes`
  0% {
    transform: translateX(8rem);
  }

  75% {
    transform: translateX(-1rem);
  }

  100% {
    transform: translate(0);
  }
`
