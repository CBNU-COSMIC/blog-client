import styled from 'styled-components';

import LoginButton from './LoginButton.tsx';

function Header() {
  return (
    <Container>
      <Contents>
        <Logo>COSMIC</Logo>
        <StyledDiv>
          <DropdownContainer>
            <DropdownButton>동아리 소개</DropdownButton>
            <DropdownButton>동아리 일정</DropdownButton>
            <DropdownButton>세미나</DropdownButton>
            <DropdownButton>게시판</DropdownButton>
          </DropdownContainer>
          <LoginButton />
        </StyledDiv>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75px;
  border: 1px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  padding: 0 80px;
  box-sizing: border-box;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
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
`;

const DropdownButton = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  height: 50px;
  border: none;
  cursor: pointer;
  background-color: white;
`;

export default Header;
