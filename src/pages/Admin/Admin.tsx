import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import getUser from '../../apis/auth/getUser';
import getUserList from '../../apis/user/getUserList';
import UserDetailModal from './UserDetailModal';

function Admin() {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState('');
  const [isUserDetailModalOpen, setIsUserDetailModalOpen] = useState(false);
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser, staleTime: Infinity, gcTime: Infinity });
  const { data: userList } = useQuery({
    queryKey: ['userList'],
    queryFn: getUserList,
  });

  if (!user || user.role !== 'president') {
    navigate('/');
    return null;
  }

  return (
    <Container>
      <UserManagement>
        <UserManagementTitle>사용자 관리</UserManagementTitle>
        <UserList>
          {userList?.map((user: { name: string; nickname: string }, index: number) => (
            <User
              key={user.nickname}
              onClick={() => {
                setSelectedUser(user.nickname);
                setIsUserDetailModalOpen(true);
              }}>
              {index + 1}. 이름: {user.name}, 닉네임: {user.nickname}
            </User>
          ))}
        </UserList>
      </UserManagement>
      {isUserDetailModalOpen && (
        <UserDetailModal userNickname={selectedUser} setIsModalOpen={setIsUserDetailModalOpen} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: end;
  width: 1440px;
  max-width: 1440px;
  padding: 80px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const UserManagement = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const UserManagementTitle = styled.h1`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  border: 1px solid #000;
  padding: 20px;
  overflow-y: scroll;
  box-sizing: border-box;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Admin;
