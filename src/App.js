import styled from '@emotion/styled'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Main from './pages/main/Main'

const Container = styled.div`
  display: flex;
`

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App
