import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import getMyInfo from '../../../../apis/user/getMyInfo';

function ProfileDetailModal({
  setIsModalOpen,
  setIsPasswordModalOpen,
}: {
  setIsModalOpen: (isOpen: boolean) => void;
  setIsPasswordModalOpen: (isOpen: boolean) => void;
}) {
  const { data: myInfo } = useQuery({ queryKey: ['myInfo'], queryFn: getMyInfo });

  const roleMapping = {
    president: '관리자',
    executive: '임원',
    member: '부원',
    guest: '손님',
  };

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const editProfile = () => {
    setIsModalOpen(false);
    setIsPasswordModalOpen(true);
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer>
        <Title>내 정보</Title>
        <Content>이름: {myInfo?.name}</Content>
        <Content>닉네임: {myInfo?.nickname}</Content>
        <Content>이메일: {myInfo?.email}</Content>
        <Content>전화번호: {myInfo?.phone_number}</Content>
        <Content>생년월일: {myInfo?.birth.split('T')[0].replace(/-/g, '.')}.</Content>
        <Content>등급: {roleMapping[myInfo?.role as keyof typeof roleMapping]}</Content>
        <Button onClick={editProfile}>정보 수정 하기</Button>
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

const Button = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  margin: 20px 134px;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
`;

export default ProfileDetailModal;
