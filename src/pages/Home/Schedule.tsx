import styled from 'styled-components';

function Schedule() {
  return (
    <Container>
      <Title>동아리 일정</Title>
      <Contents />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  height: 520px;
`;

const Title = styled.div`
  height: 50px;
  font-size: 50px;
`;

const Contents = styled.div`
  height: 450px;
  background-color: #d9d9d9;
`;

export default Schedule;
