import styled from 'styled-components';

import AnimatedSection from '../AnimationSection.tsx';

function MainSection() {
  return (
    <AnimatedSection>
      <Container>
        <h1>Main Section</h1>
      </Container>
    </AnimatedSection>
  );
}

const Container = styled.div`
  height: 100%;
  background-color: #d9d9d9;
  margin: 40px 0;
`;

export default MainSection;
