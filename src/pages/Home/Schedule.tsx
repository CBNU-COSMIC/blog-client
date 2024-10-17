import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 430px;
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

function Schedule() {
  return (
    <Container>
      <Title>동아리 일정</Title>
      <Contents />
    </Container>
  );
}

export default Schedule;
