import styled from 'styled-components';

function Wirte() {
  return (
    <Container>
      <Header>
        <Text>공지 글쓰기</Text>
        <Button>등록</Button>
      </Header>
      <TitleInput placeholder="제목을 입력해 주세요." />
      <ContentInput placeholder="내용을 입력하세요."></ContentInput>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1440px;
  margin: 0 auto;
  padding: 80px 180px;
  box-sizing: border-box;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  border-bottom: 1px solid #d3d3d3;
`;

const Text = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 500;
`;

const Button = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: var(--tertiary-color);
  color: var(--secondary-color);
  cursor: pointer;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 13px 16px 11px;
  border: none;
  border-radius: 10px;
  background-color: #f5f6f8;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    outline: 1px solid #d3d3d3;
  }

  ::placeholder {
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
  }
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 500px;
  border: #f5f6f8;
  border-radius: 10px;
  background-color: white;
  padding: 50px 30px;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  outline: 1px solid #d3d3d3;
  box-sizing: border-box;
  resize: none;

  ::placeholder {
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
  }
`;

export default Wirte;
