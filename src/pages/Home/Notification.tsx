import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 820px;
  height: 520px;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  gap: 10px;
  font-size: 50px;
`;

const Option = styled.button`
  font-size: 50px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const Contents = styled.div`
  height: 450px;
  background-color: #d9d9d9;
`;

function Notification() {
  return (
    <Container>
      <Options>
        <Option>동아리 공지</Option>
        <div>|</div>
        <Option>학과 공지</Option>
        <div>|</div>
        <Option>학교 공지</Option>
      </Options>
      <Contents />
    </Container>
  );
}

export default Notification;
