import styled from '@emotion/styled'
import React from 'react'
import { keyframes } from '@emotion/react'
import { Link } from 'react-router-dom'

// STYLE

const moveCircle = keyframes`
  0%{
    background-position: 0, 0;
  }
  100%{
    background-position: 942px, 0;
  }
`
const textAppear = keyframes`
  0%{opacity: 0;}
  100%{ opacity: 1;}
`

const Contaienr = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/img/space.jpeg');
  background-size: cover;
  background-repeat: no-repeat;

  .sun {
    width: 80px;
    height: 80px;
    background: url('/img/icon.jpeg');
    background-size: cover;
    background-repeat: repeat-x;
    border-radius: 50%;
    box-shadow: 0px 0px 30px 9px #e25615, inset 0 0 10px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    cursor: pointer;
    animation: ${moveCircle} 15s linear infinite;
    animation-direction: reverse;
    filter: brightness(1.4);

    &:hover {
      transform: scale(2);
      box-shadow: 0px 0px 40px 9px #e25615, inset 0 0 30px rgba(0, 0, 0, 0.5);
      background-color: #fd5f04;
      filter: brightness(1.4);
    }
  }

  .welcome {
    color: #fff;
    font-family: 'Martel', serif;
    font-size: 20px;
    position: absolute;
    top: 20%;
    animation: ${textAppear} 5s linear;
  }
`

const Home = () => {
  return (
    <Contaienr>
      <p className="welcome">Welcome</p>
      <Link to="main">
        <div className="sun"></div>
      </Link>
    </Contaienr>
  )
}

export default Home
