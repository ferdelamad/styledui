import styled from 'styled-components'

const HeaderBackground = styled.header`
  position: relative;
  height: 20vh;
  background-image: linear-gradient(to right, rgba(73, 50, 103, 0.85), #373854);
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0%, 100% 10vh, 0 100%);
`

export default HeaderBackground
