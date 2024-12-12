import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import RightArrowIcon from '../../icons/RightArrowIcon.tsx';

function Navigation() {
  const navigate = useNavigate();
  const { boardId } = useParams();

  const navigateToNotices = (boardId: string) => {
    navigate(`/board/${boardId}/1`);
  };

  return (
    <Container>
      <NavigationTitle>게시판</NavigationTitle>
      <NavigationItem
        isSelected={boardId === 'introduction-board' ? true : false}
        onClick={() => {
          navigateToNotices('introduction-board');
        }}>
        가입 인사 <RightArrowIcon color={boardId === 'introduction-board' ? 'white' : 'black'} />
      </NavigationItem>
      <NavigationItem
        isSelected={boardId === 'free-board' ? true : false}
        onClick={() => {
          navigateToNotices('free-board');
        }}>
        자유 게시판 <RightArrowIcon color={boardId === 'free-board' ? 'white' : 'black'} />
      </NavigationItem>
      <NavigationItem
        isSelected={boardId === 'seminar' ? true : false}
        onClick={() => {
          navigateToNotices('seminar');
        }}>
        세미나 <RightArrowIcon color={boardId === 'seminar' ? 'white' : 'black'} />
      </NavigationItem>
      <NavigationItem
        isSelected={boardId === 'archive' ? true : false}
        onClick={() => {
          navigateToNotices('archive');
        }}>
        자료실 <RightArrowIcon color={boardId === 'archive' ? 'white' : 'black'} />
      </NavigationItem>
      <NavigationItem
        isSelected={boardId === 'gallery' ? true : false}
        onClick={() => {
          navigateToNotices('gallery');
        }}>
        갤러리 <RightArrowIcon color={boardId === 'gallery' ? 'white' : 'black'} />
      </NavigationItem>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const NavigationTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: white;
  background-color: var(--tertiary-color);
`;

const NavigationItem = styled.button<{ isSelected: boolean }>`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  background-color: ${({ isSelected }) => (isSelected ? 'var(--tertiary-color)' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  padding: 20px;
  border: none;
  cursor: pointer;
`;

export default Navigation;
