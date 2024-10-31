import styled from 'styled-components';

import AnimatedSection from '../AnimationSection.tsx';

function ScheduleSection() {
  return (
    <AnimatedSection>
      <Container>
        <Title>동아리 일정</Title>
        <Contents />
      </Container>
    </AnimatedSection>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  height: 50px;
  font-size: 50px;
`;

const Contents = styled.div`
  height: 450px;
  background-color: #d9d9d9;
`;

export default ScheduleSection;
