import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #d9d9d9;
  box-sizing: border-box;
  padding: 25px;
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
      <div>COSMIC</div>
      <DropdownContainer>
        <DropdownButton>동아리 소개</DropdownButton>
        <DropdownButton>세미나</DropdownButton>
        <DropdownButton>게시판</DropdownButton>
      </DropdownContainer>
      <LoginButton>로그인</LoginButton>
    </Container>
  );
}

export default Header;
