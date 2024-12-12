import { useState, useRef, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import styled from 'styled-components';

import getMyInfo from '../../../../apis/user/getMyInfo';
import editMyInfo from '../../../../apis/user/editMyInfo';

function ProfileEditModal({ setIsModalOpen }: { setIsModalOpen: (isOpen: boolean) => void }) {
  const { data: myInfo } = useQuery({ queryKey: ['myInfo'], queryFn: getMyInfo });
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('');

  const [nameNoneError, setNameNoneError] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [nicknameNoneError, setNicknameNoneError] = useState(false);
  const [nicknameValidError, setNicknameValidError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailNoneError, setEmailNoneError] = useState(false);
  const [emailValidError, setEmailValidError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [phoneNoneError, setPhoneNoneError] = useState(false);
  const [phoneValidError, setPhoneValidError] = useState(false);
  const [birthError, setBirthError] = useState(false);
  const [birthNoneError, setBirthNoneError] = useState(false);
  const [birthValidError, setBirthValidError] = useState(false);

  const { mutate: handleEditMyInfo } = useMutation({
    mutationFn: () =>
      editMyInfo({
        username: name,
        nickname,
        email,
        phone,
        birth: `${birth.slice(0, 4)}-${birth.slice(4, 6)}-${birth.slice(6, 8)}`,
      }),
    onSuccess: () => {
      setIsModalOpen(false);
    },
    onError: (error: AxiosError<{ detail: string }>) => {
      if (error.response) {
        alert(error.response.data.detail);
      }
      console.error(error);
    },
  });

  useEffect(() => {
    if (myInfo) {
      setName(myInfo.name);
      setNickname(myInfo.nickname);
      setEmail(myInfo.email);
      setPhone(myInfo.phone_number);
      setBirth(myInfo.birth.split('T')[0].replace(/-/g, ''));
    }
  }, [myInfo]);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handleNameBlur = () => {
    if (!name.trim()) {
      setNameNoneError(true);
    } else {
      setNameNoneError(false);
    }
  };

  const nicknameRegex = /^[가-힣a-zA-Z0-9\s]+$/;
  const handleNickNameBlur = () => {
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

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleEmailBlur = () => {
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

  const phoneNumberRegex = /^(010)\d{8}$/;
  const handlePhoneNumberBlur = () => {
    if (!phone.trim()) {
      setPhoneError(true);
      setPhoneNoneError(true);
      setPhoneValidError(false);
    } else if (!phone.match(phoneNumberRegex)) {
      setPhoneError(true);
      setPhoneValidError(true);
      setPhoneNoneError(false);
    } else {
      setPhoneError(false);
      setPhoneNoneError(false);
      setPhoneValidError(false);
    }
  };

  const birthRegex = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
  const handleBirthBlur = () => {
    if (!birth.trim()) {
      setBirthError(true);
      setBirthNoneError(true);
      setBirthValidError(false);
    } else if (!birth.match(birthRegex)) {
      setBirthError(true);
      setBirthValidError(true);
      setBirthNoneError(false);
    } else {
      setBirthError(false);
      setBirthNoneError(false);
      setBirthValidError(false);
    }
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer>
        <InputBox>
          이름
          <Input
            error={nameNoneError}
            ref={nameInputRef}
            value={name}
            placeholder="name"
            onChange={(event) => setName(event.target.value)}
            onBlur={handleNameBlur}
          />
        </InputBox>
        {nameNoneError && <Error>이름을 입력해 주세요.</Error>}
        <InputBox>
          닉네임
          <Input
            error={nicknameError}
            value={nickname}
            placeholder="nickname"
            onChange={(event) => setNickname(event.target.value)}
            onBlur={handleNickNameBlur}
          />
        </InputBox>
        {nicknameNoneError && <Error>닉네임을 입력해주세요.</Error>}
        {nicknameValidError && <Error>닉네임은 한글, 영문, 숫자만 사용할 수 있습니다.</Error>}
        <InputBox>
          이메일
          <Input
            error={emailError}
            value={email}
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
            onBlur={handleEmailBlur}
          />
        </InputBox>
        {emailNoneError && <Error>이메일을 입력해주세요.</Error>}
        {emailValidError && <Error>올바른 이메일을 입력해주세요.</Error>}
        <InputBox>
          전화번호
          <Input
            error={phoneError}
            value={phone}
            placeholder="phone"
            onChange={(event) => setPhone(event.target.value)}
            onBlur={handlePhoneNumberBlur}
          />
        </InputBox>
        {phoneNoneError && <Error>전화번호를 입력해주세요.</Error>}
        {phoneValidError && <Error>올바른 휴대전화번호를 입력해주세요.</Error>}
        <InputBox>
          생년월일
          <Input
            error={birthError}
            value={birth}
            placeholder="birth"
            onChange={(event) => setBirth(event.target.value)}
            onBlur={handleBirthBlur}
          />
        </InputBox>
        {birthNoneError && <Error>생년월일을 입력해주세요.</Error>}
        {birthValidError && <Error>올바른 생년월일를 입력해주세요. 8자리 숫자여야 합니다.</Error>}
        <Button
          onClick={() => {
            if (!nameNoneError && !nicknameError && !emailError && !phoneError && !birthError) {
              handleEditMyInfo();
            }
          }}>
          정보 수정 하기
        </Button>
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 480px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const Button = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  margin: 20px 134px;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
`;

const InputBox = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 20px;
`;

const Input = styled.input<{ error: boolean }>`
  padding: 10px;
  width: 250px;
  ${({ error }) => (error ? 'border: 1px solid var(--error-color);' : 'border: 1px solid #c5ccd2;')}
  border-radius: 8px;
  outline: none;
  &:focus {
    ${({ error }) => (error ? 'border: 1px solid var(--error-color);' : 'border: 1px solid  var(--primary-color);')}
  }
  cursor: pointer;
`;

const Error = styled.div`
  font-family: Pretendard, sans-serif;
  font-size: 12px;
  color: var(--error-color);
  margin: 10px 0 0 20px;
`;

export default ProfileEditModal;
