import styled from 'styled-components'

const A = styled.a`
  text-align: center;
  color: #fff;
  font-size: ${props => props.fontSize || '1.6 rem'};
  transition: background-color 150ms;
  flex: 0 0 auto;
  border-radius: 50%;
  display: inline-flex;
  padding: 1rem;
  width: 1.5rem;
  margin: 0 0.5rem;
  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export default A
