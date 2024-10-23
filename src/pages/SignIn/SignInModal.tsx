import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 250px;
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
  &:focus-within::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    width: 407px;
    height: 100%;
    border: 2px solid #009090;
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
  &:focus-within::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    width: 407px;
    height: 100%;
    border: 2px solid #009090;
    border-radius: 0 0 8px 8px;
  }
`;

const Input = styled.input`
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

const Button = styled.button`
  width: 410px;
  height: 50px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #009090;
  cursor: pointer;
  font-size: 20px;
`;

function SignInModal() {
  return (
    <Container>
      <InputForm>
        <InputBox1>
          <Input />
          <InputLabel>아이디</InputLabel>
        </InputBox1>
        <InputBox2>
          <Input />
          <InputLabel>비밀번호</InputLabel>
        </InputBox2>
      </InputForm>
      <Button>로그인</Button>
    </Container>
  );
}

export default SignInModal;
