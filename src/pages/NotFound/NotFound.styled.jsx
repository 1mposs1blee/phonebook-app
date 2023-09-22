import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const gradientAnimationLeftToRight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const NotFoundTitle = styled.h1`
  padding: 2px;
  background: linear-gradient(to right, rgb(63, 81, 181), #00aaff);
  -webkit-background-clip: text;
  color: transparent;
  animation: ${gradientAnimationLeftToRight} 2s linear infinite alternate;
`;
