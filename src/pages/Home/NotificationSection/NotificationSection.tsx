import { useState } from 'react';
import styled from 'styled-components';

import AnimatedSection from '../AnimationSection.tsx';
import Notifications from './Notifications.tsx';

function NotificationSection() {
  const [selectedOption, setSelectedOption] = useState(1);

  return (
    <AnimatedSection>
      <Container>
        <Options>
          <Option onClick={() => setSelectedOption(1)}>학과 공지</Option>
          <Option onClick={() => setSelectedOption(2)}>학교 공지</Option>
          <Option onClick={() => setSelectedOption(3)}>소중단 공지</Option>
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

const Option = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 50px;
  font-weight: bold;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export default NotificationSection;
