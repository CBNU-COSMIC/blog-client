import styled from 'styled-components';

import LoginButton from './LoginButton.tsx';

function Header() {
  return (
    <Container>
      <Contents>
        <Logo>COSMIC</Logo>
        <DropdownContainer>
          <DropdownButton>동아리 소개</DropdownButton>
          <DropdownButton>세미나</DropdownButton>
          <DropdownButton>게시판</DropdownButton>
        </DropdownContainer>
        <LoginButton />
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  border: 1px solid white;
  border-bottom-color: var(--primary-color);
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  padding: 0 80px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  font-family: 'Gmarket', sans-serif;
  font-size: 40px;
  font-weight: 900;
  color: var(--primary-color);
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

export default Header;
