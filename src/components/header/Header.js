import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  background-color: #5e227f;
  height: 10vh;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto 50rem 30rem;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    height: 22vh;
    padding: 0.5rem;
    margin-bottom: 200px;
    grid-gap: 0;
  }
`
export default Header
