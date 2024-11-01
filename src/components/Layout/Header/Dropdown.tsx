import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Dropdown({
  isDropdownVisible,
  setIsDropdownVisible,
}: {
  isDropdownVisible: boolean;
  setIsDropdownVisible: (isDropdownVisible: boolean) => void;
}) {
  const navigate = useNavigate();
  const [isFocusedIntroduction, setIsFocusedIntroduction] = useState(false);
  const [isFocusedSchedule, setIsFocusedSchedule] = useState(false);
  const [isFocusedSeminar, setIsFocusedSeminar] = useState(false);
  const [isFocusedBoard, setIsFocusedBoard] = useState(false);
  const [isSeminarDropdownVisible, setIsSeminarDropdownVisible] = useState(false);
  const [isBoardDropdownVisible, setIsBoardDropdownVisible] = useState(false);

  useEffect(() => {
    if (isDropdownVisible) {
      if (isFocusedBoard) {
        setIsBoardDropdownVisible(true);
        setIsSeminarDropdownVisible(false);
      }
      if (isFocusedSeminar) {
        setIsSeminarDropdownVisible(true);
        setIsBoardDropdownVisible(false);
      }
    } else {
      setIsSeminarDropdownVisible(false);
      setIsBoardDropdownVisible(false);
    }
  }, [isFocusedBoard, isFocusedSeminar, isDropdownVisible]);

  const navigateToIntroductionPage = () => {
    navigate('/introduction');
  };

  const navigateToNotificationBoard = () => {
    navigate('/notification');
  };

  return (
    <Container>
      <DropdownButton
        onClick={navigateToIntroductionPage}
        onMouseOver={() => {
          setIsFocusedIntroduction(true);
          setIsDropdownVisible(false);
        }}
        onFocus={() => {
          setIsFocusedIntroduction(true);
          setIsDropdownVisible(false);
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
          setIsDropdownVisible(false);
        }}
        onFocus={() => {
          setIsFocusedSchedule(true);
          setIsDropdownVisible(false);
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
          setIsDropdownVisible(true);
        }}
        onFocus={() => {
          setIsFocusedSeminar(true);
          setIsDropdownVisible(true);
        }}
        onMouseLeave={() => {
          setIsFocusedSeminar(false);
        }}>
        세미나
        <DropdownUnderline isFocused={isSeminarDropdownVisible} />
        <DropdownContents isOpen={isSeminarDropdownVisible}>
          <DropdownContent>2023년</DropdownContent>
          <DropdownContent>2024년</DropdownContent>
          <DropdownContent>2025년</DropdownContent>
        </DropdownContents>
      </DropdownButton>
      <DropdownButton
        onMouseOver={() => {
          setIsFocusedBoard(true);
          setIsDropdownVisible(true);
        }}
        onFocus={() => {
          setIsFocusedBoard(true);
          setIsDropdownVisible(true);
        }}
        onMouseLeave={() => {
          setIsFocusedBoard(false);
        }}>
        게시판
        <DropdownUnderline isFocused={isBoardDropdownVisible} />
        <DropdownContents isOpen={isBoardDropdownVisible}>
          <DropdownContent onClick={navigateToNotificationBoard}>공지</DropdownContent>
          <DropdownContent>가입 인사</DropdownContent>
          <DropdownContent>자유 게시판</DropdownContent>
          <DropdownContent>자료실</DropdownContent>
          <DropdownContent>갤러리</DropdownContent>
        </DropdownContents>
      </DropdownButton>
    </Container>
  );
}

const Container = styled.div`
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
  top: 61px;
  z-index: 10;
  transition: width 0.3s ease-in-out;
`;

const DropdownContents = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100px;
  right: 0;
  display: flex;
  justify-content: end;
  width: 1000px;
  z-index: 5;
  gap: 20px;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

const DropdownContent = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  border: none;
  cursor: pointer;
  background-color: white;

  &:hover {
    color: var(--primary-color);
  }
`;

export default Dropdown;
