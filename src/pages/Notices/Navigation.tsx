import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import RightArrowIcon from '../../icons/RightArrowIcon.tsx';

function Navigation() {
  const navigate = useNavigate();
  const { boardId } = useParams();

  const navigateToNotices = (boardId: string) => {
    navigate(`/notices/${boardId}`);
  };

  return (
    <Container>
      <NavigationTitle>공지</NavigationTitle>
      <NavigationItem
        isSelected={boardId === 'cosmic' ? true : false}
        onClick={() => {
          navigateToNotices('cosmic');
        }}>
        COSMIC 공지 <RightArrowIcon color={boardId === 'cosmic' ? 'white' : 'black'} />
      </NavigationItem>
      <NavigationItem
        isSelected={boardId === 'cbnu' ? true : false}
        onClick={() => {
          navigateToNotices('cbnu');
        }}>
        학교 공지 <RightArrowIcon color={boardId === 'cbnu' ? 'white' : 'black'} />
      </NavigationItem>
      <NavigationItem
        isSelected={boardId === 'cse' ? true : false}
        onClick={() => {
          navigateToNotices('cse');
        }}>
        학과 공지 <RightArrowIcon color={boardId === 'cse' ? 'white' : 'black'} />
      </NavigationItem>
      <NavigationItem
        isSelected={boardId === 'sw' ? true : false}
        onClick={() => {
          navigateToNotices('sw');
        }}>
        소중단 공지 <RightArrowIcon color={boardId === 'sw' ? 'white' : 'black'} />
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
