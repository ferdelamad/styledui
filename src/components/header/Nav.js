import styled from 'styled-components'

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-gap: 2rem;
`

export default Nav
