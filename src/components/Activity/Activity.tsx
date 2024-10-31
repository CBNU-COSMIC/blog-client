import { useState } from 'react';
import styled from 'styled-components';

function Activity({ title, intro, image }: { title: string; intro: string; image: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onFocus={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}>
      <ActivityImage src={image} alt={title} isHovered={isHovered} />
      <ActivityTitle isHovered={isHovered}>{title}</ActivityTitle>
      <ActivityIntro isHovered={isHovered}>{intro}</ActivityIntro>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--secondary-color);
`;

const ActivityTitle = styled.div<{ isHovered: boolean }>`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: white;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ isHovered }) => (isHovered ? 'translateY(-175px)' : 'translateY(25px)')};
  transition: transform 1s ease;
`;

const ActivityImage = styled.img<{ isHovered: boolean }>`
  width: 300px;
  height: 225px;
  transform: ${({ isHovered }) => (isHovered ? 'translateY(-225px)' : 'translateY(0)')};
  transition: transform 1s ease;
`;

const ActivityIntro = styled.div<{ isHovered: boolean }>`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  color: white;
  line-height: 30px;
  text-align: center;
  width: 200px;
  height: 50px;
  min-height: 50px;
  white-space: pre-wrap;
  transform: ${({ isHovered }) => (isHovered ? 'translateY(-125px)' : 'translateY(75px)')};
  transition: transform 1s ease;
`;

export default Activity;
