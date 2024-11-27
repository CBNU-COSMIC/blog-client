import { useState } from 'react';
import styled from 'styled-components';

import PersonIcon from '../../icons/PersonIcon.tsx';
import PasswordIcon from '../../icons/PasswordIcon.tsx';
import EmailIcon from '../../icons/EmailIcon.tsx';

function AccountModal({
  id,
  setId,
  password,
  setPassword,
  email,
  setEmail,
  idError,
  setIdError,
  idNoneError,
  setIdNoneError,
  idValidError,
  setIdValidError,
  passwordError,
  setPasswordError,
  passwordNoneError,
  setPasswordNoneError,
  passwordValidError,
  setPasswordValidError,
  emailNoneError,
  setEmailNoneError,
  emailValidError,
  setEmailValidError,
  emailError,
  setEmailError,
}: {
  id: string;
  setId: (id: string) => void;
  password: string;
  setPassword: (password: string) => void;
  email: string;
  setEmail: (email: string) => void;
  idError: boolean;
  setIdError: (isError: boolean) => void;
  idNoneError: boolean;
  setIdNoneError: (isError: boolean) => void;
  idValidError: boolean;
  setIdValidError: (isError: boolean) => void;
  passwordError: boolean;
  setPasswordError: (isError: boolean) => void;
  passwordNoneError: boolean;
  setPasswordNoneError: (isError: boolean) => void;
  passwordValidError: boolean;
  setPasswordValidError: (isError: boolean) => void;
  emailNoneError: boolean;
  setEmailNoneError: (isError: boolean) => void;
  emailValidError: boolean;
  setEmailValidError: (isError: boolean) => void;
  emailError: boolean;
  setEmailError: (isError: boolean) => void;
}) {
  const [isFirstInputFocus, setIsFirstInputFocus] = useState(false);
  const [isSecondInputFocus, setIsSecondInputFocus] = useState(false);
  const [isThirdInputFocus, setIsThirdInputFocus] = useState(false);

  const handleIdBlur = () => {
    const idRegex = /^[a-z0-9]{5,20}$/;
    setIsFirstInputFocus(false);
    if (!id.trim()) {
      setIdError(true);
      setIdNoneError(true);
      setIdValidError(false);
    } else if (!id.match(idRegex)) {
      setIdError(true);
      setIdValidError(true);
      setIdNoneError(false);
    } else {
      setIdError(false);
      setIdNoneError(false);
      setIdValidError(false);
    }
  };

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()+~`{}[\]:;"'<>,.?/\\|-])[A-Za-z\d!@#$%^&*()+~`{}[\]:;"'<>,.?/\\|-]{8,16}$/;
  const handlePasswordBlur = () => {
    setIsSecondInputFocus(false);
    if (!password.trim()) {
      setPasswordError(true);
      setPasswordNoneError(true);
      setPasswordValidError(false);
    } else if (!password.match(passwordRegex)) {
      setPasswordError(true);
      setPasswordValidError(true);
      setPasswordNoneError(false);
    } else {
      setPasswordError(false);
      setPasswordNoneError(false);
      setPasswordValidError(false);
    }
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleEmailBlur = () => {
    setIsThirdInputFocus(false);
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
  };

  return (
    <Container>
      <InputBox1 idError={idError} passwordError={passwordNoneError} isSecondInputFocus={isSecondInputFocus}>
        <PersonIcon />
        <Input
          placeholder="아이디"
          onChange={(event) => setId(event.target.value)}
          onFocus={() => setIsFirstInputFocus(true)}
          onBlur={handleIdBlur}
          error={idError}
        />
      </InputBox1>
      <InputBox2
        idError={idError}
        passwordError={passwordError}
        emailError={emailError}
        isFirstInputFocus={isFirstInputFocus}
        isThirdInputFocus={isThirdInputFocus}>
        <PasswordIcon />
        <Input
          placeholder="비밀번호"
          onChange={(event) => setPassword(event.target.value)}
          onFocus={() => setIsSecondInputFocus(true)}
          onBlur={handlePasswordBlur}
          error={passwordError}
        />
      </InputBox2>
      <InputBox3 emailError={emailError} isSecondInputFocus={isSecondInputFocus} passwordError={passwordNoneError}>
        <EmailIcon />
        <Input
          placeholder="이메일주소"
          onChange={(event) => setEmail(event.target.value)}
          onFocus={() => setIsThirdInputFocus(true)}
          onBlur={handleEmailBlur}
          error={emailError}
        />
      </InputBox3>
      {idNoneError && <NoneError>아이디를 입력해주세요.</NoneError>}
      {idValidError && <NoneError>아이디는 5~20자의 영문 소문자와 숫자만 사용 가능합니다.</NoneError>}
      {passwordNoneError && <NoneError>비밀번호를 입력해주세요.</NoneError>}
      {passwordValidError && <NoneError>비밀번호는 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</NoneError>}
      {emailNoneError && <NoneError>이메일을 입력해주세요.</NoneError>}
      {emailValidError && <NoneError>올바른 이메일을 입력해주세요.</NoneError>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const InputBox1 = styled.div<{ idError: boolean; passwordError: boolean; isSecondInputFocus: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: ${({ idError }) => (idError ? '2px solid var(--error-color)' : '1px solid #e1e3e5')};
  border-radius: 8px 8px 0 0;
  padding: 0 8px;
  box-sizing: border-box;
  gap: 7px;
  ${({ isSecondInputFocus, passwordError }) => isSecondInputFocus && !passwordError && 'border-bottom: none;'}
  ${({ idError }) =>
    !idError &&
    `&:focus-within {
        border: 2px solid var(--primary-color);
        border-radius: 8px 8px 0 0;
     };`}
`;

const InputBox2 = styled.div<{
  idError: boolean;
  passwordError: boolean;
  emailError: boolean;
  isFirstInputFocus: boolean;
  isThirdInputFocus: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: ${({ passwordError }) => (passwordError ? '2px solid var(--error-color)' : '1px solid #e1e3e5')};
  ${({ idError, passwordError, isFirstInputFocus }) =>
    !idError && passwordError && !isFirstInputFocus ? '' : 'border-top: none;'}
  ${({ emailError, passwordError, isThirdInputFocus }) =>
    !emailError && passwordError && !isThirdInputFocus ? '' : 'border-bottom: none;'}
  padding: 0 8px;
  box-sizing: border-box;
  gap: 7px;
  ${({ passwordError }) =>
    !passwordError &&
    `&:focus-within {
        border: 2px solid var(--primary-color);
     };`}
`;

const InputBox3 = styled.div<{ emailError: boolean; passwordError: boolean; isSecondInputFocus: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: ${({ emailError }) => (emailError ? '2px solid var(--error-color)' : '1px solid #e1e3e5')};
  border-radius: 0 0 8px 8px;
  padding: 0 8px;
  box-sizing: border-box;
  gap: 7px;
  ${({ isSecondInputFocus, passwordError }) => isSecondInputFocus && !passwordError && 'border-top: none;'}
  ${({ emailError }) =>
    !emailError &&
    `&:focus-within {
        border: 2px solid var(--primary-color);
        border-radius: 0 0 8px 8px;
     };`}
`;

const Input = styled.input<{ error: boolean }>`
  position: relative;
  z-index: 10;
  width: 380px;
  height: 22px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  outline: none;
  ${({ error }) =>
    error &&
    `color: var(--error-color);
    &::placeholder {
        color: var(--error-color);
        text-decoration: underline;
    };`}
`;

const NoneError = styled.div`
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  color: var(--error-color);
  margin: 10px 0 0 10px;
`;

export default AccountModal;
