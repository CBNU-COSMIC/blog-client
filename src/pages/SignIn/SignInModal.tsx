import { useState, useRef } from 'react';
import styled from 'styled-components';

function SignInModal() {
  const idInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isBlurError, setIsBlurError] = useState(false);

  const login = () => {
    if (!id.trim()) {
      idInputRef.current?.focus();
      setIsBlurError(true);
      return;
    }

    if (!password.trim()) {
      passwordInputRef.current?.focus();
      setIsBlurError(true);
      return;
    }

    setIsBlurError(false);
    // TODO: login
  };

  return (
    <Container>
      <InputForm>
        <InputBox1>
          <Input ref={idInputRef} onChange={(event) => setId(event.target.value)} />
          <InputLabel>아이디</InputLabel>
        </InputBox1>
        <InputBox2>
          <Input ref={passwordInputRef} onChange={(event) => setPassword(event.target.value)} />
          <InputLabel>비밀번호</InputLabel>
        </InputBox2>
      </InputForm>
      {isBlurError && <BlurError>아이디 또는 비밀번호를 입력해주세요.</BlurError>}
      <Button onClick={login}>로그인</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  //height: 250px;
  gap: 20px;
  padding: 24px;
  box-sizing: border-box;
  border: 1.5px solid #e1e3e5;
  border-radius: 12px;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 410px;
  height: 120px;
`;

const InputBox1 = styled.div`
  position: relative;
  height: 60px;
  padding: 27px 15px 8px;
  border: 1.5px solid #c5ccd2;
  border-radius: 8px 8px 0 0;
  &:focus-within {
    border: 2px solid var(--primary-color);
    border-radius: 8px 8px 0 0;
  }
`;

const InputBox2 = styled.div`
  position: relative;
  height: 60px;
  padding: 27px 15px 8px;
  border: 1.5px solid #c5ccd2;
  border-top: none;
  border-radius: 0 0 8px 8px;
  &:focus-within {
    border: 2px solid var(--primary-color);
    border-radius: 0 0 8px 8px;
  }
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

const InputLabel = styled.label`
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 12px;
  color: #aaa;
`;

const BlurError = styled.div`
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  color: var(--error-color);
`;

const Button = styled.button`
  width: 410px;
  height: 50px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: var(--primary-color);
  cursor: pointer;
  font-size: 20px;
`;

export default SignInModal;
