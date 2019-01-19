import styled from 'styled-components'
import React from 'react'

const MainContainer = styled.main`
  display: grid;
  margin: 0 auto;
  width: 45vw;
  height: 40vw;
  grid-gap: 0.15rem;
  grid-template-columns: 2.5rem 1fr 2.5rem 1fr 5rem;
  grid-template-rows: 2fr 2.5rem 1fr 2.5rem 1fr 2.5rem 1fr 2.5rem 2fr;
`
const Rec = styled.div`
  background: tomato;
  grid-row: ${props => props.row};
  grid-column: ${props => props.col};
`

const Text = styled.h1`
  margin: 0.2em 0 0.35em 0;
  padding: 0;
  text-align: center;
  line-height: 0.7;
  letter-spacing: ${props => props.spacing};
  font-family: 'Trocchi', serif;
  font-size: ${props => props.fontSize || '7.8vh'};
  display: block;
  align-self: center;
  justify-self: center;
  color: #3c4468;
  grid-row: ${props => props.row};
  grid-column: ${props => props.col};
`

const Main = () => (
  <MainContainer>
    <Rec row={1} col={1} />
    <Rec row={1} col={3} />
    <Rec row={2} col={'1 / -1'} />
    <Text row={3} col={'1 / -1'}>
      Styled UI
    </Text>
    <Rec row={4} col={'1 / -1'} />
    <Text row={5} col={'1 / -1'}>
      Helping The Web To
    </Text>
    <Rec row={6} col={'1 / -1'} />
    <Text row={7} col={'1 / -1'}>
      Be More Beautiful
    </Text>
    <Rec row={8} col={'1 / -1'} />
    <Rec row={9} col={3} />
  </MainContainer>
)

export default Main
