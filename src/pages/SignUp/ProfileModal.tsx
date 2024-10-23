import styled from 'styled-components';

import PersonIcon from '../../icons/PersonIcon.tsx';
import CalendarIcon from '../../icons/CalendarIcon.tsx';
import PhoneIcon from '../../icons/PhoneIcon.tsx';

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
    border: 2px solid #009090;
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
    border: 2px solid #009090;
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
    border: 2px solid #009090;
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

function ProfileModal() {
  return (
    <Container>
      <InputBox1>
        <PersonIcon />
        <Input placeholder="이름" />
      </InputBox1>
      <InputBox2>
        <CalendarIcon />
        <Input placeholder="생년월일 8자리" />
      </InputBox2>
      <InputBox3>
        <PhoneIcon />
        <Input placeholder="휴대전화번호" />
      </InputBox3>
    </Container>
  );
}

export default ProfileModal;