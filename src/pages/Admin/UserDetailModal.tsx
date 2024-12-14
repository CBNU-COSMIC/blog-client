import { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import getUserInfo from '../../apis/user/getUserInfo';
import userRoleChange from '../../apis/user/userRoleChange';

function UserDetailModal({
  userNickname,
  setIsModalOpen,
}: {
  userNickname: string;
  setIsModalOpen: (isOpen: boolean) => void;
}) {
  const queryClient = useQueryClient();
  const [selectedRole, setSelectedRole] = useState('');
  const { data: userInfo } = useQuery({
    queryKey: ['userInfo', userNickname],
    queryFn: () => getUserInfo(userNickname),
  });

  const { mutate: handleRoleChange } = useMutation({
    mutationFn: () => userRoleChange(userNickname, selectedRole),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userList'] });
      setIsModalOpen(false);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  useEffect(() => {
    if (userInfo) {
      setSelectedRole(userInfo.role);
    }
  }, [userInfo]);

  const handleRoleChangeButton = () => {
    const isConfirmed = window.confirm('등급을 변경 하시겠습니까?');
    if (isConfirmed) {
      handleRoleChange();
    }
  };

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer>
        <Title>회원 정보</Title>
        <Content>이름: {userInfo?.name}</Content>
        <Content>닉네임: {userInfo?.nickname}</Content>
        <Content>이메일: {userInfo?.email}</Content>
        <Content>전화번호: {userInfo?.phone_number}</Content>
        <Content>생년월일: {userInfo?.birth.split('T')[0].replace(/-/g, '.')}.</Content>
        <Content>
          등급:{' '}
          {userInfo?.role === 'president' ? (
            '회장'
          ) : (
            <Select value={selectedRole} onChange={(event) => setSelectedRole(event.target.value)}>
              <Option value="executive">임원</Option>
              <Option value="member">부원</Option>
              <Option value="guest">손님</Option>
            </Select>
          )}
          {userInfo?.role !== 'president' && <Button onClick={handleRoleChangeButton}>변경</Button>}
        </Content>
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  width: 400px;
  height: 480px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const Title = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
`;

const Content = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  padding: 20px;
`;

const Select = styled.select`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  width: 100px;
  padding: 5px;
`;

const Option = styled.option`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
`;

const Button = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  padding: 5px;
  height: 33px;
  border: none;
  border-radius: 6px;
  margin-left: 5px;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
`;

export default UserDetailModal;
