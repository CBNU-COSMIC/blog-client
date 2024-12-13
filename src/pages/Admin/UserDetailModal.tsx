import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import getUserInfo from '../../apis/user/getUserInfo';

function UserDetailModal({
  userNickname,
  setIsModalOpen,
}: {
  userNickname: string;
  setIsModalOpen: (isOpen: boolean) => void;
}) {
  const { data: userInfo } = useQuery({
    queryKey: ['userInfo', userNickname],
    queryFn: () => getUserInfo(userNickname),
  });

  const roleMapping = {
    president: '회장',
    executive: '임원',
    member: '부원',
    guest: '손님',
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
        <Content>등급: {roleMapping[userInfo?.role as keyof typeof roleMapping]}</Content>
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

export default UserDetailModal;
