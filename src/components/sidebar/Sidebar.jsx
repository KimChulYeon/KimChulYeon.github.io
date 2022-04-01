import React from 'react'
import styled from '@emotion/styled'

// STYLE
const Container = styled.div`
  flex: 1;
  border: 1px solid black;
  min-height: 100vh;
`
const Top = styled.div``
const Center = styled.div``
const Bottom = styled.div``

const Sidebar = () => {
  return (
    <Container>
      <Top>
        <h1>Chul</h1>
      </Top>
      <Center>
        <ul>
          <li></li>
        </ul>
      </Center>
      <Bottom>bottom</Bottom>
    </Container>
  )
}

export default Sidebar
