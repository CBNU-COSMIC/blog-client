import styled from 'styled-components';

import SignInModal from './SignInModal.tsx';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 458px;
  margin: 180px auto 0;
`;

const Logo = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 40px;
  color: #009090;
  cursor: pointer;
`;

const Options = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: #888888;
  margin-top: 20px;
`;

const Option = styled.div`
  cursor: pointer;
`;

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
    </Container>
  );
}

export default SignIn;
