import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  background-color: #5e227f;
  height: 10vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr));
  grid-gap: 15rem;
  justify-content: center;
  align-items: center;
`
export default Header
