import { useState } from 'react';
import styled from 'styled-components';

import DropdownIcon2 from '../../../icons/DropdownIcon2';

function Profile({ name }: { name: string }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Container>
      {isDropdownOpen && (
        <Dropdown>
          <DropdownItem color="black">마이페이지</DropdownItem>
          <DropdownItem color="red">로그아웃</DropdownItem>
        </Dropdown>
      )}
      <Name>{name}</Name>
      <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <DropdownIcon2 />
      </DropdownButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: white;
`;

const Name = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: white;
  border: none;
  cursor: pointer;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  right: 0;
  width: 120px;
  background-color: white;
  border: 1px solid #c5ccd2;
  border-radius: 8px;
  z-index: 2000;
`;

const DropdownItem = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  font-family: 'Pretendard', sans-serif;
  padding: 10px;
  color: ${({ color }) => color};
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export default Profile;
