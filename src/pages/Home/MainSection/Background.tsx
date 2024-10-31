import styled, { keyframes } from 'styled-components';

import StarIcon from '../../../icons/StarIcon.tsx';

function Background() {
  return (
    <Container>
      <Star style={{ left: '25%', top: '25%' }} delay={0}>
        <StarIcon />
      </Star>
      <Star style={{ left: '49%', top: '20%' }} delay={7}>
        <StarIcon />
      </Star>
      <Star style={{ left: '73%', top: '25%' }} delay={1}>
        <StarIcon />
      </Star>
      <Star style={{ left: '25%', top: '55%' }} delay={4}>
        <StarIcon />
      </Star>
      <Star style={{ left: '49%', top: '60%' }} delay={2}>
        <StarIcon />
      </Star>
      <Star style={{ left: '73%', top: '55%' }} delay={6}>
        <StarIcon />
      </Star>
      <Star style={{ left: '27%', top: '40%' }} delay={3}>
        <StarIcon />
      </Star>
      <Star style={{ left: '71%', top: '40%' }} delay={5}>
        <StarIcon />
      </Star>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -81px;
  left: 0;
  padding: 80px;
  box-sizing: border-box;
  z-index: -1;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const blink = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const Star = styled.div<{ delay: number }>`
  position: absolute;
  opacity: 0;
  animation:
    ${rotate} 4s linear infinite,
    ${blink} 3s infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

export default Background;
