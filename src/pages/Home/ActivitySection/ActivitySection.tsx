import styled from 'styled-components';

function ActivitySection() {
  return (
    <Container>
      <h1>ActivitySection</h1>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  background-color: #d9d9d9;
  margin: 40px 0;
  scroll-snap-align: start;
`;

export default ActivitySection;
