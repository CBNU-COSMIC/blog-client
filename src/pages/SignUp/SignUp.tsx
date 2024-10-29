import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AccountModal from './AccountModal.tsx';
import ProfileModal from './ProfileModal.tsx';

function SignUp() {
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  return (
    <Container>
      <Contents>
        <Logo onClick={navigateToMainPage}>COSMIC</Logo>
        <AccountModal />
        <ProfileModal />
      </Contents>
      <Button>회원가입</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 100vh;
  margin: 0 auto;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Logo = styled.div`
  font-family: 'Gmarket', sans-serif;
  width: 120px;
  font-size: 32px;
  font-weight: 900;
  color: var(--primary-color);
  margin: 30px 0;
  cursor: pointer;
`;

const Button = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  width: 500px;
  height: 50px;
  border: none;
  border-radius: 4px;
  color: white;
  margin-bottom: 40px;
  background-color: var(--primary-color);
  cursor: pointer;
  font-size: 20px;
`;

export default SignUp;
