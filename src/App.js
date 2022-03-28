import styled from '@emotion/styled'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'

const Container = styled.div`
  display: flex;
`

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="" element={<></>} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App
