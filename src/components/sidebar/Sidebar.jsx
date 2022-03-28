import React from 'react'
import styled from '@emotion/styled'

// STYLE
const Container = styled.div`
  flex: 1;
`
const Top = styled.div``
const Center = styled.div``
const Bottom = styled.div``

const Sidebar = () => {
  return (
    <Container>
      sidebar
      <Top>top</Top>
      <Center>center</Center>
      <Bottom>bottom</Bottom>
    </Container>
  )
}

export default Sidebar
