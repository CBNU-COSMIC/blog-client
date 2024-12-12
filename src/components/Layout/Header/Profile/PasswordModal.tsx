import { useState, useEffect, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import styled from 'styled-components';

import checkPassword from '../../../../apis/auth/checkPassword';
import PasswordShowIcon from '../../../../icons/PasswordShowIcon';
import PasswordHideIcon from '../../../../icons/PasswordHideIcon';

function PasswordModal({
  setIsModalOpen,
  setIsEditModalOpen,
}: {
  setIsModalOpen: (isOpen: boolean) => void;
  setIsEditModalOpen: (isOpen: boolean) => void;
}) {
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState('');
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const { mutate: handleCheckPassword } = useMutation({
    mutationFn: () => checkPassword(password),
    onSuccess: () => {
      setIsModalOpen(false);
      setIsEditModalOpen(true);
    },
    onError: (error: AxiosError<{ detail: string }>) => {
      if (error.response) {
        alert(error.response.data.detail);
      }
      console.error(error);
    },
  });

  useEffect(() => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }, []);

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCheckPassword();
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onSubmit={handleSubmit}>
        <Title>비밀번호를 입력해 주세요.</Title>
        <InputBox
          onClick={() => {
            if (passwordInputRef.current) {
              passwordInputRef.current.focus();
            }
          }}>
          <Input
            type={isPasswordShow ? 'text' : 'password'}
            ref={passwordInputRef}
            value={password}
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <PasswordShowAndHideButton type="button" onClick={() => setIsPasswordShow(!isPasswordShow)}>
            {password ? isPasswordShow ? <PasswordShowIcon /> : <PasswordHideIcon /> : null}
          </PasswordShowAndHideButton>
        </InputBox>
        <Button type="submit">확인</Button>
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

const ModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 480px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  height: 60px;
  padding: 0 20px;
  border: 1.5px solid #c5ccd2;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  position: relative;
  z-index: 10;
  width: 380px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const PasswordShowAndHideButton = styled.button`
  position: absolute;
  top: 18px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border: none;
  background-color: white;
`;

const Button = styled.button`
  width: 342px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
`;

export default PasswordModal;
