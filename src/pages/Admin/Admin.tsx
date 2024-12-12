import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import getUser from '../../apis/auth/getUser';

function Admin() {
  const navigate = useNavigate();
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser, staleTime: Infinity, gcTime: Infinity });

  if (!user || user.role !== 'president') {
    navigate('/');
    return null;
  }

  return <Container>Admin</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Admin;
