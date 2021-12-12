import styled, { keyframes } from "styled-components"

export const moveBackgroundImage = keyframes`
  from {
    transform: rotate3d(0) translateX(0) translateY(0);
    top: -100px;
    left: -100px;
  }
  to {
    transform: rotate3d(1, 1, 1, 7deg) translateX(10px) translateY(15px);
    top: -50px;
    left: -50px;
  }
`

export const BackgroundImage = styled.img`
  position: absolute;
  object-fit: cover;
  animation: ${moveBackgroundImage} 4s ease-in-out alternate infinite;
`
