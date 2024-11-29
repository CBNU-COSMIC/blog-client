import { useRef, useState } from 'react';
import styled from 'styled-components';

import PersonIcon from '../../icons/PersonIcon.tsx';
import CalendarIcon from '../../icons/CalendarIcon.tsx';
import PhoneIcon from '../../icons/PhoneIcon.tsx';
import NicknameIcon from '../../icons/NicknameIcon.tsx';

function ProfileModal({
  name,
  setName,
  nickname,
  setNickname,
  birth,
  setBirth,
  phoneNumber,
  setPhoneNumber,
  nameNoneError,
  setNameNoneError,
  nicknameNoneError,
  setNicknameNoneError,
  birthNoneError,
  setBirthNoneError,
  phoneNumberNoneError,
  setPhoneNumberNoneError,
  nicknameValidError,
  setNicknameValidError,
  birthValidError,
  setBirthValidError,
  phoneNumberValidError,
  setPhoneNumberValidError,
  nicknameError,
  setNicknameError,
  birthError,
  setBirthError,
  phoneNumberError,
  setPhoneNumberError,
}: {
  name: string;
  setName: (name: string) => void;
  nickname: string;
  setNickname: (nickName: string) => void;
  birth: string;
  setBirth: (birth: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  nameNoneError: boolean;
  setNameNoneError: (isError: boolean) => void;
  nicknameNoneError: boolean;
  setNicknameNoneError: (isError: boolean) => void;
  birthNoneError: boolean;
  setBirthNoneError: (isError: boolean) => void;
  phoneNumberNoneError: boolean;
  setPhoneNumberNoneError: (isError: boolean) => void;
  nicknameValidError: boolean;
  setNicknameValidError: (isError: boolean) => void;
  birthValidError: boolean;
  setBirthValidError: (isError: boolean) => void;
  phoneNumberValidError: boolean;
  setPhoneNumberValidError: (isError: boolean) => void;
  nicknameError: boolean;
  setNicknameError: (isError: boolean) => void;
  birthError: boolean;
  setBirthError: (isError: boolean) => void;
  phoneNumberError: boolean;
  setPhoneNumberError: (isError: boolean) => void;
}) {
  const birthInputRef = useRef<HTMLInputElement>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement>(null);
  const [isFirstInputFocus, setIsFirstInputFocus] = useState(false);
  const [isSecondInputFocus, setIsSecondInputFocus] = useState(false);
  const [isThirdInputFocus, setIsThirdInputFocus] = useState(false);
  const [isFourthInputFocus, setIsFourthInputFocus] = useState(false);

  const handleNameBlur = () => {
    setIsFirstInputFocus(false);
    if (!name.trim()) {
      setNameNoneError(true);
    } else {
      setNameNoneError(false);
    }
  };

  const nicknameRegex = /^[가-힣a-zA-Z0-9\s]+$/;
  const handleNickNameBlur = () => {
    setIsSecondInputFocus(false);
    if (!nickname.trim()) {
      setNicknameError(true);
      setNicknameNoneError(true);
      setNicknameValidError(false);
    } else if (!nickname.match(nicknameRegex)) {
      setNicknameError(true);
      setNicknameNoneError(false);
      setNicknameValidError(true);
    } else {
      setNicknameError(false);
      setNicknameNoneError(false);
      setNicknameValidError(false);
    }
  };

  const birthRegex1 = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
  const birthRegex2 = /^(19|20)\d{2}\.(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|3[01])$/;
  const handleBirthBlur = () => {
    setIsThirdInputFocus(false);
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

  const phoneNumberRegex1 = /^(010)\d{8}$/;
  const phoneNumberRegex2 = /^(010)-\d{4}-\d{4}$/;
  const handlePhoneNumberBlur = () => {
    setIsFourthInputFocus(false);
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
      if (phoneNumberInputRef.current) {
        phoneNumberInputRef.current.value = phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
      }
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
      <InputBox4
        nameNoneError={nameNoneError}
        nicknameError={nicknameError}
        birthError={birthError}
        isFirstInputFocus={isFirstInputFocus}
        isThirdInputFocus={isThirdInputFocus}>
        <NicknameIcon />
        <Input
          placeholder="닉네임"
          onChange={(event) => setNickname(event.target.value)}
          onFocus={() => setIsSecondInputFocus(true)}
          onBlur={handleNickNameBlur}
          error={nicknameError}
        />
      </InputBox4>
      <InputBox2
        nicknameError={nicknameError}
        birthError={birthError}
        phoneNumberError={phoneNumberError}
        isFirstInputFocus={isSecondInputFocus}
        isThirdInputFocus={isFourthInputFocus}>
        <CalendarIcon />
        <Input
          ref={birthInputRef}
          placeholder="생년월일 8자리"
          onChange={(event) => setBirth(event.target.value)}
          onFocus={() => setIsThirdInputFocus(true)}
          onBlur={handleBirthBlur}
          error={birthError}
        />
      </InputBox2>
      <InputBox3 phoneNumberError={phoneNumberError} birthError={birthError} isThirdInputFocus={isThirdInputFocus}>
        <PhoneIcon />
        <Input
          ref={phoneNumberInputRef}
          placeholder="휴대전화번호"
          onChange={(event) => setPhoneNumber(event.target.value)}
          onFocus={() => setIsFourthInputFocus(true)}
          onBlur={handlePhoneNumberBlur}
          error={phoneNumberError}
        />
      </InputBox3>
      {nameNoneError && <NoneError>이름을 입력해주세요.</NoneError>}
      {nicknameNoneError && <NoneError>닉네임을 입력해주세요.</NoneError>}
      {nicknameValidError && <NoneError>닉네임은 한글, 영문, 숫자만 사용할 수 있습니다.</NoneError>}
      {birthNoneError && <NoneError>생년월일을 입력해주세요.</NoneError>}
      {birthValidError && <NoneError>올바른 생년월일를 입력해주세요. 8자리 숫자여야 합니다.</NoneError>}
      {phoneNumberNoneError && <NoneError>휴대전화번호를 입력해주세요.</NoneError>}
      {phoneNumberValidError && <NoneError>올바른 휴대전화번호를 입력해주세요.</NoneError>}
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
  nicknameError: boolean;
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
  ${({ nicknameError, birthError, isFirstInputFocus }) =>
    !nicknameError && birthError && !isFirstInputFocus ? '' : 'border-top: none;'}
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

const InputBox3 = styled.div<{ phoneNumberError: boolean; birthError: boolean; isThirdInputFocus: boolean }>`
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
  ${({ isThirdInputFocus, birthError }) => isThirdInputFocus && !birthError && 'border-top: none;'}
  ${({ phoneNumberError }) =>
    !phoneNumberError &&
    `&:focus-within {
        border: 2px solid var(--primary-color);
        border-radius: 0 0 8px 8px;
     };`}
`;

const InputBox4 = styled.div<{
  nameNoneError: boolean;
  nicknameError: boolean;
  birthError: boolean;
  isFirstInputFocus: boolean;
  isThirdInputFocus: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: ${({ nicknameError }) => (nicknameError ? '2px solid var(--error-color)' : '1px solid #e1e3e5')};
  ${({ nameNoneError, nicknameError, isFirstInputFocus }) =>
    !nameNoneError && nicknameError && !isFirstInputFocus ? '' : 'border-top: none;'}
  ${({ birthError, nicknameError, isThirdInputFocus }) =>
    !birthError && nicknameError && !isThirdInputFocus
      ? ''
      : !birthError && nicknameError
        ? 'border-bottom: none;'
        : ''}
    padding: 0 8px;
  box-sizing: border-box;
  gap: 7px;
  ${({ nicknameError }) =>
    !nicknameError &&
    `&:focus-within {
        border: 2px solid var(--primary-color);
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
