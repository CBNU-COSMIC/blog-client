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
  idNoneError,
  setIdNoneError,
  passwordNoneError,
  setPasswordNoneError,
  emailNoneError,
  setEmailNoneError,
  emailValidError,
  setEmailValidError,
}: {
  id: string;
  setId: (id: string) => void;
  password: string;
  setPassword: (password: string) => void;
  email: string;
  setEmail: (email: string) => void;
  idNoneError: boolean;
  setIdNoneError: (isError: boolean) => void;
  passwordNoneError: boolean;
  setPasswordNoneError: (isError: boolean) => void;
  emailNoneError: boolean;
  setEmailNoneError: (isError: boolean) => void;
  emailValidError: boolean;
  setEmailValidError: (isError: boolean) => void;
}) {
  const [emailError, setEmailError] = useState(false);
  const [isFirstInputFocus, setIsFirstInputFocus] = useState(false);
  const [isSecondInputFocus, setIsSecondInputFocus] = useState(false);
  const [isThirdInputFocus, setIsThirdInputFocus] = useState(false);

  const handleIdBlur = () => {
    setIsFirstInputFocus(false);
    if (!id.trim()) {
      setIdNoneError(true);
    } else {
      setIdNoneError(false);
    }
  };
  const handlePasswordBlur = () => {
    setIsSecondInputFocus(false);
    if (!password.trim()) {
      setPasswordNoneError(true);
    } else {
      setPasswordNoneError(false);
    }
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleEmailBlur = () => {
    setIsThirdInputFocus(false);
    if (!email.trim()) {
      setEmailError(true);
      setEmailNoneError(true);
      setEmailValidError(false);
    } else if (!emailRegex.test(email)) {
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
      <InputBox1 idError={idNoneError} passwordError={passwordNoneError} isSecondInputFocus={isSecondInputFocus}>
        <PersonIcon />
        <Input
          placeholder="아이디"
          onChange={(event) => setId(event.target.value)}
          onFocus={() => setIsFirstInputFocus(true)}
          onBlur={handleIdBlur}
          error={idNoneError}
        />
      </InputBox1>
      <InputBox2
        idError={idNoneError}
        passwordError={passwordNoneError}
        emailError={emailError}
        isFirstInputFocus={isFirstInputFocus}
        isThirdInputFocus={isThirdInputFocus}>
        <PasswordIcon />
        <Input
          placeholder="비밀번호"
          onChange={(event) => setPassword(event.target.value)}
          onFocus={() => setIsSecondInputFocus(true)}
          onBlur={handlePasswordBlur}
          error={passwordNoneError}
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
      {passwordNoneError && <NoneError>비밀번호를 입력해주세요.</NoneError>}
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
