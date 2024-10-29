import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AccountModal from './AccountModal.tsx';
import ProfileModal from './ProfileModal.tsx';

function SignUp() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [idNoneError, setIdNoneError] = useState(false);
  const [passwordNoneError, setPasswordNoneError] = useState(false);
  const [emailNoneError, setEmailNoneError] = useState(false);
  const [nameNoneError, setNameNoneError] = useState(false);
  const [birthNoneError, setBirthNoneError] = useState(false);
  const [phoneNumberNoneError, setPhoneNumberNoneError] = useState(false);

  const [emailValidError, setEmailValidError] = useState(false);

  const navigateToMainPage = () => {
    navigate('/');
  };

  return (
    <Container>
      <Contents>
        <Logo onClick={navigateToMainPage}>COSMIC</Logo>
        <AccountModal
          id={id}
          setId={setId}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          idNoneError={idNoneError}
          setIdNoneError={setIdNoneError}
          passwordNoneError={passwordNoneError}
          setPasswordNoneError={setPasswordNoneError}
          emailNoneError={emailNoneError}
          setEmailNoneError={setEmailNoneError}
          emailValidError={emailValidError}
          setEmailValidError={setEmailValidError}
        />
        <ProfileModal
          name={name}
          setName={setName}
          birth={birth}
          setBirth={setBirth}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          nameNoneError={nameNoneError}
          setNameNoneError={setNameNoneError}
          birthNoneError={birthNoneError}
          setBirthNoneError={setBirthNoneError}
          phoneNumberNoneError={phoneNumberNoneError}
          setPhoneNumberNoneError={setPhoneNumberNoneError}
        />
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
