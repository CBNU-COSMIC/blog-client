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
  const [birthValidError, setBirthValidError] = useState(false);
  const [phoneNumberValidError, setPhoneNumberValidError] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [birthError, setBirthError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const navigateToMainPage = () => {
    navigate('/');
  };

  const signUp = () => {
    if (!id.trim()) {
      setIdNoneError(true);
    } else {
      setIdNoneError(false);
    }

    if (!password.trim()) {
      setPasswordNoneError(true);
    } else {
      setPasswordNoneError(false);
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      setEmailError(true);
      setEmailNoneError(true);
      setEmailValidError(false);
    } else if (!email.match(emailRegex)) {
      setEmailError(true);
      setEmailValidError(true);
      setEmailNoneError(false);
    } else {
      setEmailError(false);
      setEmailNoneError(false);
      setEmailValidError(false);
    }

    if (!name.trim()) {
      setNameNoneError(true);
    } else {
      setNameNoneError(false);
    }

    const birthRegex1 = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
    const birthRegex2 = /^(19|20)\d{2}\.(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|3[01])$/;
    if (!birth.trim()) {
      setBirthError(true);
      setBirthNoneError(true);
      setBirthValidError(false);
    } else if (!birth.match(birthRegex1) && !birth.match(birthRegex2)) {
      setBirthError(true);
      setBirthValidError(true);
      setBirthNoneError(false);
    } else {
      setBirthError(false);
      setBirthNoneError(false);
      setBirthValidError(false);
    }

    const phoneNumberRegex1 = /^(010)\d{8}$/;
    const phoneNumberRegex2 = /^(010)-\d{4}-\d{4}$/;
    if (!phoneNumber.trim()) {
      setPhoneNumberError(true);
      setPhoneNumberNoneError(true);
      setPhoneNumberValidError(false);
    } else if (!phoneNumber.match(phoneNumberRegex1) && !phoneNumber.match(phoneNumberRegex2)) {
      setPhoneNumberError(true);
      setPhoneNumberValidError(true);
      setPhoneNumberNoneError(false);
    } else {
      setPhoneNumberError(false);
      setPhoneNumberValidError(false);
      setPhoneNumberNoneError(false);
    }

    if (!idNoneError && !passwordNoneError && !nameNoneError && !emailError && !birthError && !phoneNumberError) {
      // TODO: 회원가입
    }
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
          emailError={emailError}
          setEmailError={setEmailError}
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
          birthValidError={birthValidError}
          setBirthValidError={setBirthValidError}
          phoneNumberValidError={phoneNumberValidError}
          setPhoneNumberValidError={setPhoneNumberValidError}
          birthError={birthError}
          setBirthError={setBirthError}
          phoneNumberError={phoneNumberError}
          setPhoneNumberError={setPhoneNumberError}
        />
      </Contents>
      <Button onClick={signUp}>회원가입</Button>
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
