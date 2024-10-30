import styled from 'styled-components';

import AnimatedSection from '../AnimationSection.tsx';

function IntroduceSection() {
  return (
    <AnimatedSection>
      <Container>
        <h1>IntroduceSection</h1>
      </Container>
    </AnimatedSection>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default IntroduceSection;
