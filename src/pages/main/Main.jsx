import React from 'react'
import styled from '@emotion/styled'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

// STYLE
const Container = styled.div`
  display: flex;
`
const MainContainer = styled.div`
  flex: 6;
  background-color: aliceblue;
`

const Main = () => {
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Navbar />
        <div>main</div>
        <div>main</div>
      </MainContainer>
    </Container>
  )
}

export default Main
