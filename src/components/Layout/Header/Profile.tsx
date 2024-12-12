import { useState, useEffect, useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import DropdownIcon2 from '../../../icons/DropdownIcon2';
import signOut from '../../../apis/auth/signOut';

function Profile({ name }: { name: string }) {
  const queryClient = useQueryClient();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { mutate: handleSignOut } = useMutation({
    mutationFn: () => signOut(),
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      queryClient.removeQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(!isDropdownOpen);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <Container ref={dropdownRef} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
      {isDropdownOpen && (
        <Dropdown>
          <DropdownItem color="black">마이페이지</DropdownItem>
          <DropdownItem
            color="red"
            onClick={() => {
              handleSignOut();
            }}>
            로그아웃
          </DropdownItem>
        </Dropdown>
      )}
      <Name>{name}</Name>
      <DropdownButton>
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
  cursor: pointer;
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
