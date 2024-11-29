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
  const [isFocusedNotice, setIsFocusedNotice] = useState(false);
  const [isFocusedBoard, setIsFocusedBoard] = useState(false);
  const [isNoticeDropdownVisible, setIsNoticeDropdownVisible] = useState(false);
  const [isBoardDropdownVisible, setIsBoardDropdownVisible] = useState(false);

  useEffect(() => {
    if (isDropdownVisible) {
      if (isFocusedBoard) {
        setIsBoardDropdownVisible(true);
        setIsNoticeDropdownVisible(false);
      }
      if (isFocusedNotice) {
        setIsNoticeDropdownVisible(true);
        setIsBoardDropdownVisible(false);
      }
    } else {
      setIsNoticeDropdownVisible(false);
      setIsBoardDropdownVisible(false);
    }
  }, [isFocusedBoard, isFocusedNotice, isDropdownVisible]);

  const navigateToIntroductionPage = () => {
    navigate('/introduction');
  };

  const navigateToSchedulePage = () => {
    navigate('/schedule');
  };

  const navigateToNotices = (boardId: string) => {
    setIsDropdownVisible(false);
    navigate(`/notices/${boardId}`);
  };

  const navigateToBoard = (boardId: string) => {
    setIsDropdownVisible(false);
    setIsBoardDropdownVisible(false);
    navigate(`/board/${boardId}`);
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
        onClick={navigateToSchedulePage}
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
          setIsFocusedNotice(true);
          setIsDropdownVisible(true);
        }}
        onFocus={() => {
          setIsFocusedNotice(true);
          setIsDropdownVisible(true);
        }}
        onMouseLeave={() => {
          setIsFocusedNotice(false);
        }}>
        공지
        <DropdownUnderline isFocused={isNoticeDropdownVisible} />
        <DropdownContents isOpen={isNoticeDropdownVisible}>
          <DropdownContent
            onClick={() => {
              navigateToNotices('cosmic');
            }}>
            COSMIC 공지
          </DropdownContent>
          <DropdownContent
            onClick={() => {
              navigateToNotices('cbnu');
            }}>
            학교 공지
          </DropdownContent>
          <DropdownContent
            onClick={() => {
              navigateToNotices('cse');
            }}>
            학과 공지
          </DropdownContent>
          <DropdownContent
            onClick={() => {
              navigateToNotices('sw');
            }}>
            소중단 공지
          </DropdownContent>
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
          <DropdownContent
            onClick={() => {
              navigateToBoard('introduction-board');
            }}>
            가입 인사
          </DropdownContent>
          <DropdownContent
            onClick={() => {
              navigateToBoard('free-board');
            }}>
            자유 게시판
          </DropdownContent>
          <DropdownContent
            onClick={() => {
              navigateToBoard('semianr');
            }}>
            세미나
          </DropdownContent>
          <DropdownContent
            onClick={() => {
              navigateToBoard('archive');
            }}>
            자료실
          </DropdownContent>
          <DropdownContent
            onClick={() => {
              navigateToBoard('gallery');
            }}>
            갤러리
          </DropdownContent>
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
