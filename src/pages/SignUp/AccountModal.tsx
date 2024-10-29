import styled from 'styled-components';

import PersonIcon from '../../icons/PersonIcon.tsx';
import PasswordIcon from '../../icons/PasswordIcon.tsx';
import EmailIcon from '../../icons/EmailIcon.tsx';

function AccountModal() {
  return (
    <Container>
      <InputBox1>
        <PersonIcon />
        <Input placeholder="아이디" />
      </InputBox1>
      <InputBox2>
        <PasswordIcon />
        <Input placeholder="비밀번호" />
      </InputBox2>
      <InputBox3>
        <EmailIcon />
        <Input placeholder="이메일주소" />
      </InputBox3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 150px;
`;

const InputBox1 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: 1px solid #e1e3e5;
  border-radius: 6px 6px 0 0;
  padding: 0 8px;
  box-sizing: border-box;
  gap: 7px;
  &:focus-within::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    width: 497px;
    height: 100%;
    border: 2px solid var(--primary-color);
    border-radius: 8px 8px 0 0;
  }
`;

const InputBox2 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: 1px solid #e1e3e5;
  border-top: none;
  border-bottom: none;
  padding: 0 8px;
  box-sizing: border-box;
  gap: 7px;
  &:focus-within::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    width: 497px;
    height: 100%;
    border: 2px solid var(--primary-color);
  }
`;

const InputBox3 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: 1px solid #e1e3e5;
  border-radius: 0 0 6px 6px;
  padding: 0 8px;
  box-sizing: border-box;
  gap: 7px;
  &:focus-within::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    width: 497px;
    height: 100%;
    border: 2px solid var(--primary-color);
    border-radius: 0 0 8px 8px;
  }
`;

const Input = styled.input`
  width: 380px;
  height: 22px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  outline: none;
`;

export default AccountModal;
