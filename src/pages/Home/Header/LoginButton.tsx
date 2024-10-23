import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #009090;
  cursor: pointer;
  font-size: 20px;
`;

function LoginButton() {
  const navigate = useNavigate();
  const navigateToSignInPage = () => {
    navigate('/sign-in');
  };

  return <Container onClick={navigateToSignInPage}>로그인</Container>;
}

export default LoginButton;
