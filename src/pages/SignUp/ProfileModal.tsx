import { useRef, useState } from 'react';
import styled from 'styled-components';

import PersonIcon from '../../icons/PersonIcon.tsx';
import CalendarIcon from '../../icons/CalendarIcon.tsx';
import PhoneIcon from '../../icons/PhoneIcon.tsx';

function ProfileModal({
  name,
  setName,
  birth,
  setBirth,
  phoneNumber,
  setPhoneNumber,
  nameNoneError,
  setNameNoneError,
  birthNoneError,
  setBirthNoneError,
  phoneNumberNoneError,
  setPhoneNumberNoneError,
  birthValidError,
  setBirthValidError,
}: {
  name: string;
  setName: (name: string) => void;
  birth: string;
  setBirth: (birth: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  nameNoneError: boolean;
  setNameNoneError: (isError: boolean) => void;
  birthNoneError: boolean;
  setBirthNoneError: (isError: boolean) => void;
  phoneNumberNoneError: boolean;
  setPhoneNumberNoneError: (isError: boolean) => void;
  birthValidError: boolean;
  setBirthValidError: (isError: boolean) => void;
}) {
  const birthInputRef = useRef<HTMLInputElement>(null);
  const [birthError, setBirthError] = useState(false);
  const [isFirstInputFocus, setIsFirstInputFocus] = useState(false);
  const [isSecondInputFocus, setIsSecondInputFocus] = useState(false);
  const [isThirdInputFocus, setIsThirdInputFocus] = useState(false);

  const handleNameBlur = () => {
    setIsFirstInputFocus(false);
    if (!name.trim()) {
      setNameNoneError(true);
    } else {
      setNameNoneError(false);
    }
  };

  const birthRegex1 = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
  const birthRegex2 = /^(19|20)\d{2}\.(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|3[01])$/;
  const handleBirthBlur = () => {
    setIsSecondInputFocus(false);
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
      if (birthInputRef.current) {
        birthInputRef.current.value = birth.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
      }
    }
  };

  const handlePhoneNumberBlur = () => {
    setIsThirdInputFocus(false);
    if (!phoneNumber.trim()) {
      setPhoneNumberNoneError(true);
    } else {
      setPhoneNumberNoneError(false);
    }
  };

  return (
    <Container>
      <InputBox1 nameError={nameNoneError} birthError={birthError} isSecondInputFocus={isSecondInputFocus}>
        <PersonIcon />
        <Input
          placeholder="이름"
          onChange={(event) => setName(event.target.value)}
          onFocus={() => setIsFirstInputFocus(true)}
          onBlur={handleNameBlur}
          error={nameNoneError}
        />
      </InputBox1>
      <InputBox2
        nameError={nameNoneError}
        birthError={birthError}
        phoneNumberError={phoneNumberNoneError}
        isFirstInputFocus={isFirstInputFocus}
        isThirdInputFocus={isThirdInputFocus}>
        <CalendarIcon />
        <Input
          ref={birthInputRef}
          placeholder="생년월일 8자리"
          onChange={(event) => setBirth(event.target.value)}
          onFocus={() => setIsSecondInputFocus(true)}
          onBlur={handleBirthBlur}
          error={birthError}
        />
      </InputBox2>
      <InputBox3
        phoneNumberError={phoneNumberNoneError}
        birthError={birthError}
        isSecondInputFocus={isSecondInputFocus}>
        <PhoneIcon />
        <Input
          placeholder="휴대전화번호"
          onChange={(event) => setPhoneNumber(event.target.value)}
          onFocus={() => setIsThirdInputFocus(true)}
          onBlur={handlePhoneNumberBlur}
          error={phoneNumberNoneError}
        />
      </InputBox3>
      {nameNoneError && <NoneError>이름을 입력해주세요.</NoneError>}
      {birthNoneError && <NoneError>생년월일을 입력해주세요.</NoneError>}
      {birthValidError && <NoneError>올바른 생년월일를 입력해주세요. 8자리 숫자여야 합니다.</NoneError>}
      {phoneNumberNoneError && <NoneError>휴대전화번호를 입력해주세요.</NoneError>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const InputBox1 = styled.div<{ nameError: boolean; birthError: boolean; isSecondInputFocus: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: ${({ nameError }) => (nameError ? '2px solid var(--error-color)' : '1px solid #e1e3e5')};
  border-radius: 8px 8px 0 0;
  padding: 0 8px;
  box-sizing: border-box;
  gap: 7px;
  ${({ isSecondInputFocus, birthError }) => isSecondInputFocus && !birthError && 'border-bottom: none;'}
  ${({ nameError }) =>
    !nameError &&
    `&:focus-within {
        border: 2px solid var(--primary-color);
        border-radius: 8px 8px 0 0;
     };`}
`;

const InputBox2 = styled.div<{
  nameError: boolean;
  birthError: boolean;
  phoneNumberError: boolean;
  isFirstInputFocus: boolean;
  isThirdInputFocus: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: ${({ birthError }) => (birthError ? '2px solid var(--error-color)' : '1px solid #e1e3e5')};
  ${({ nameError, birthError, isFirstInputFocus }) =>
    !nameError && birthError && !isFirstInputFocus ? '' : 'border-top: none;'}
  ${({ phoneNumberError, birthError, isThirdInputFocus }) =>
    !phoneNumberError && birthError && !isThirdInputFocus ? '' : 'border-bottom: none;'}
    padding: 0 8px;
  box-sizing: border-box;
  gap: 7px;
  ${({ birthError }) =>
    !birthError &&
    `&:focus-within {
        border: 2px solid var(--primary-color);
     };`}
`;

const InputBox3 = styled.div<{ phoneNumberError: boolean; birthError: boolean; isSecondInputFocus: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: ${({ phoneNumberError }) => (phoneNumberError ? '2px solid var(--error-color)' : '1px solid #e1e3e5')};
  border-radius: 0 0 8px 8px;
  padding: 0 8px;
  box-sizing: border-box;
  gap: 7px;
  ${({ isSecondInputFocus, birthError }) => isSecondInputFocus && !birthError && 'border-top: none;'}
  ${({ phoneNumberError }) =>
    !phoneNumberError &&
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

export default ProfileModal;
