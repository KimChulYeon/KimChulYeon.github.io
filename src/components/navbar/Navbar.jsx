import React from 'react'
import styled from '@emotion/styled'

// STYLE
const Container = styled.div`
  height: 50px;
  background-color: aquamarine;
`
const NavContainer = styled.div`
  display: flex;
`

const Navbar = () => {
  return (
    <Container>
      <NavContainer>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </NavContainer>
    </Container>
  )
}

export default Navbar
