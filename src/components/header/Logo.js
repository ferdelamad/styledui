import styled from 'styled-components'

const H1 = styled.h1`
  color: white;
  padding-left: 2rem;
  transition: all 0.5s ease;

  :hover {
    color: tomato;
  }

  @media (max-width: 700px) {
    text-align: center;
    padding-left: 0;
  }

  @media (max-width: 500px) {
    text-align: center;
    padding-left: 0;
  }
`

export default H1
