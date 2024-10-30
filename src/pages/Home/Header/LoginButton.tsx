import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();
  const navigateToSignInPage = () => {
    navigate('/sign-in');
  };

  return <Container onClick={navigateToSignInPage}>로그인</Container>;
}

const Container = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 32px;
  color: white;
  background-color: var(--primary-color);
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
`;

export default LoginButton;
