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
  background-color: #d9d9d9;
  margin: 40px 0;
`;

export default IntroduceSection;