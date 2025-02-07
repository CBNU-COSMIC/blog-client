import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AnimatedSection from '../AnimationSection.tsx';
import Notifications from './Notifications.tsx';

function NotificationSection() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('cse');

  const navigateToNotificationBoard = () => {
    navigate('/notices/cosmic/1');
  };

  return (
    <AnimatedSection>
      <Container>
        <Options>
          <Option onClick={() => setSelectedOption('cse')} selected={selectedOption === 'cse' ? true : false}>
            학과 공지
          </Option>
          <Option onClick={() => setSelectedOption('cbnu')} selected={selectedOption === 'cbnu' ? true : false}>
            학교 공지
          </Option>
          <Option onClick={() => setSelectedOption('sw')} selected={selectedOption === 'sw' ? true : false}>
            소중단 공지
          </Option>
          <MoreButton onClick={navigateToNotificationBoard}>공지 더 보기</MoreButton>
        </Options>
        <Notifications selectedOption={selectedOption} />
      </Container>
    </AnimatedSection>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 1100px;
  height: 100%;
  margin: auto;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  gap: 50px;
  font-size: 50px;
`;

const Option = styled.button<{ selected: boolean }>`
  font-family: 'Pretendard', sans-serif;
  font-size: ${({ selected }) => (selected ? '50px' : '30px')};
  font-weight: bold;
  color: ${({ selected }) => (selected ? 'var(--secondary-color)' : 'black')};
  width: 240px;
  height: 62px;
  border: none;
  background-color: white;
  cursor: pointer;
  transition:
    font-size 0.5s ease,
    color 0.5s ease;
`;

const MoreButton = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  width: 150px;
  height: 50px;
  min-height: 50px;
  border: none;
  border-radius: 32px;
  color: white;
  background-color: var(--secondary-color);
  cursor: pointer;
  transition: opacity 1s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export default NotificationSection;
