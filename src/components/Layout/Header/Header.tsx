import { useState } from 'react';
import styled from 'styled-components';

import LoginButton from './LoginButton.tsx';
import Dropdown from './Dropdown.tsx';

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <Container>
      <Contents>
        <Logo>COSMIC</Logo>
        <StyledDiv>
          <Dropdown isDropdownVisible={isDropdownVisible} setIsDropdownVisible={setIsDropdownVisible} />
          <LoginButton />
        </StyledDiv>
      </Contents>
      <DropdownBackground
        onMouseLeave={() => {
          setIsDropdownVisible(false);
        }}
        isOpen={isDropdownVisible}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75px;
  z-index: 20;
  background-color: white;
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

const DropdownBackground = styled.div<{ isOpen: boolean }>`
  position: absolute;
  width: 100%;
  height: 100px;
  top: 100%;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

export default Header;
