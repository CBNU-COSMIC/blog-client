import styled from 'styled-components';

import SignInModal from './SignInModal.tsx';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  const navigateToSignUpPage = () => {
    navigate('/sign-up');
  };

  return (
    <Container>
      <Logo onClick={navigateToMainPage}>COSMIC</Logo>
      <SignInModal />
      <Options>
        <Option>비밀번호 찾기</Option>
        <div>|</div>
        <Option>아이디 찾기</Option>
        <div>|</div>
        <Option onClick={navigateToSignUpPage}>회원 가입</Option>
      </Options>
      <Copyright>Copyright 2024. COSMIC. all rights reserved.</Copyright>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 458px;
  margin: 180px auto 0;
`;

const Logo = styled.div`
  font-family: 'Gmarket', sans-serif;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 40px;
  color: var(--primary-color);
  cursor: pointer;
`;

const Options = styled.div`
  display: flex;
  gap: 10px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #888888;
  margin: 20px 0 96px;
`;

const Option = styled.div`
  cursor: pointer;
`;

const Copyright = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  color: #868e96;
`;

export default SignIn;
