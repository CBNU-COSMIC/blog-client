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
}) {
  const [isFirstInputFocus, setIsFirstInputFocus] = useState(false);
  const [isSecondInputFocus, setIsSecondInputFocus] = useState(false);
  const [isThirdInputFocus, setIsThirdInputFocus] = useState(false);

  console.log(isSecondInputFocus);

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
  const handleEmailBlur = () => {
    setIsThirdInputFocus(false);
    if (!email.trim()) {
      setEmailNoneError(true);
    } else {
      setEmailNoneError(false);
    }
  };

  return (
    <Container>
      <InputBox1 error={idNoneError} isSecondInputFocus={isSecondInputFocus}>
        <PersonIcon />
        <Input
          placeholder="아이디"
          onChange={(event) => setId(event.target.value)}
          onFocus={() => setIsFirstInputFocus(true)}
          onBlur={handleIdBlur}
        />
      </InputBox1>
      <InputBox2
        idError={idNoneError}
        passwordError={passwordNoneError}
        emailError={emailNoneError}
        isFirstInputFocus={isFirstInputFocus}
        isThirdInputFocus={isThirdInputFocus}>
        <PasswordIcon />
        <Input
          placeholder="비밀번호"
          onChange={(event) => setPassword(event.target.value)}
          onFocus={() => setIsSecondInputFocus(true)}
          onBlur={handlePasswordBlur}
        />
      </InputBox2>
      <InputBox3 error={emailNoneError} isSecondInputFocus={isSecondInputFocus}>
        <EmailIcon />
        <Input
          placeholder="이메일주소"
          onChange={(event) => setEmail(event.target.value)}
          onFocus={() => setIsThirdInputFocus(true)}
          onBlur={handleEmailBlur}
        />
      </InputBox3>
      {idNoneError && <BlurError>아이디를 입력해주세요.</BlurError>}
      {passwordNoneError && <BlurError>비밀번호를 입력해주세요.</BlurError>}
      {emailNoneError && <BlurError>이메일을 입력해주세요.</BlurError>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const InputBox1 = styled.div<{ error: boolean; isSecondInputFocus: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: ${({ error }) => (error ? '2px solid var(--error-color)' : '1px solid #e1e3e5')};
  border-radius: 8px 8px 0 0;
  padding: 0 8px;
  box-sizing: border-box;
  gap: 7px;
  ${({ isSecondInputFocus }) => isSecondInputFocus && 'border-bottom: none;'}
  &:focus-within {
    border: 2px solid var(--primary-color);
    border-radius: 8px 8px 0 0;
  }
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
  &:focus-within {
    border: 2px solid var(--primary-color);
  }
`;

const InputBox3 = styled.div<{ error: boolean; isSecondInputFocus: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: ${({ error }) => (error ? '2px solid var(--error-color)' : '1px solid #e1e3e5')};
  border-radius: 0 0 8px 8px;
  padding: 0 8px;
  box-sizing: border-box;
  gap: 7px;
  ${({ isSecondInputFocus }) => isSecondInputFocus && 'border-top: none;'}
  &:focus-within {
    border: 2px solid var(--primary-color);
    border-radius: 0 0 8px 8px;
  }
`;

const Input = styled.input`
  position: relative;
  z-index: 10;
  width: 380px;
  height: 22px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  outline: none;
`;

const BlurError = styled.div`
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  color: var(--error-color);
  margin: 10px 0 0 10px;
`;

export default AccountModal;
