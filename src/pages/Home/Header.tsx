import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  border: 1px solid #ffffff;
  border-bottom-color: #008080;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  padding: 0 80px;
  box-sizing: border-box;
`;

const DropdownContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 500px;
`;

const DropdownButton = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  cursor: pointer;
  background-color: #ababab;
  color: white;
`;

const LoginButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  cursor: pointer;
`;

function Header() {
  return (
    <Container>
      <Contents>
        <div>COSMIC</div>
        <DropdownContainer>
          <DropdownButton>동아리 소개</DropdownButton>
          <DropdownButton>세미나</DropdownButton>
          <DropdownButton>게시판</DropdownButton>
        </DropdownContainer>
        <LoginButton>로그인</LoginButton>
      </Contents>
    </Container>
  );
}

export default Header;
