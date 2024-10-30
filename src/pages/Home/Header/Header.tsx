import { useState } from 'react';
import styled from 'styled-components';

import LoginButton from './LoginButton.tsx';

function Header() {
  const [isFocusedIntroduction, setIsFocusedIntroduction] = useState(false);
  const [isFocusedSchedule, setIsFocusedSchedule] = useState(false);
  const [isFocusedSeminar, setIsFocusedSeminar] = useState(false);
  const [isFocusedBoard, setIsFocusedBoard] = useState(false);

  return (
    <Container>
      <Contents>
        <Logo>COSMIC</Logo>
        <StyledDiv>
          <DropdownContainer>
            <DropdownButton
              onMouseOver={() => {
                setIsFocusedIntroduction(true);
              }}
              onFocus={() => {
                setIsFocusedIntroduction(true);
              }}
              onMouseLeave={() => {
                setIsFocusedIntroduction(false);
              }}>
              동아리 소개
              <DropdownUnderline isFocused={isFocusedIntroduction} />
            </DropdownButton>
            <DropdownButton
              onMouseOver={() => {
                setIsFocusedSchedule(true);
              }}
              onFocus={() => {
                setIsFocusedSchedule(true);
              }}
              onMouseLeave={() => {
                setIsFocusedSchedule(false);
              }}>
              동아리 일정
              <DropdownUnderline isFocused={isFocusedSchedule} />
            </DropdownButton>
            <DropdownButton
              onMouseOver={() => {
                setIsFocusedSeminar(true);
              }}
              onFocus={() => {
                setIsFocusedSeminar(true);
              }}
              onMouseLeave={() => {
                setIsFocusedSeminar(false);
              }}>
              세미나
              <DropdownUnderline isFocused={isFocusedSeminar} />
            </DropdownButton>
            <DropdownButton
              onMouseOver={() => {
                setIsFocusedBoard(true);
              }}
              onFocus={() => {
                setIsFocusedBoard(true);
              }}
              onMouseLeave={() => {
                setIsFocusedBoard(false);
              }}>
              게시판
              <DropdownUnderline isFocused={isFocusedBoard} />
            </DropdownButton>
          </DropdownContainer>
          <LoginButton />
        </StyledDiv>
      </Contents>
      {(isFocusedSeminar || isFocusedBoard) && <DropdownBackground />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
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
  position: relative;
  height: 50px;
  border: none;
  cursor: pointer;
  background-color: white;
`;

const DropdownUnderline = styled.div<{ isFocused: boolean }>`
  position: absolute;
  width: ${({ isFocused }) => (isFocused ? '100%' : '0')};
  height: 3px;
  background-color: var(--primary-color);
  left: 0;
  top: 62px;
  transition: width 0.3s ease-in-out;
`;

const DropdownBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  top: 75px;
  left: 0;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
`;

export default Header;
