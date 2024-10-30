import styled from 'styled-components';

function IntroduceSection() {
  return (
    <Container>
      <h1>IntroduceSection</h1>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  background-color: #d9d9d9;
  margin: 40px 0;
  scroll-snap-align: start;
`;

export default IntroduceSection;
