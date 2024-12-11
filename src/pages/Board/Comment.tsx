import { useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import getUser from '../../apis/auth/getUser';

function Comment() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [comment, setComment] = useState('');
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser, staleTime: Infinity, gcTime: Infinity });

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    if (textarea.scrollHeight === 16) {
      textarea.style.height = '15px';
      return;
    }
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <Container>
      <InputForm>
        <NickName>{user?.username}</NickName>
        <Textarea
          ref={textareaRef}
          value={comment}
          rows={1}
          placeholder="댓글을 남겨보세요"
          onChange={(event) => setComment(event.target.value)}
          onInput={handleInput}
        />
        <ButtonContainer>
          <Button active={comment ? true : false}>등록</Button>
        </ButtonContainer>
      </InputForm>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 6px;
  padding: 16px 10px 10px 18px;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NickName = styled.div`
  font-family: 'Pretendard' sans-serif;
  font-size: 13px;
  font-weight: 700;
`;

const Textarea = styled.textarea`
  font-family: 'Pretendard' sans-serif;
  font-size: 13px;
  font-weight: 400;
  height: 15px;
  padding: 0;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;

  &::placeholder {
    color: #c6c6c6;
  }

  &:focus::placeholder {
    color: #e6e6e6;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  height: 34px;
  justify-content: flex-end;
`;

const Button = styled.button<{ active: boolean }>`
  font-family: 'Pretendard' sans-serif;
  font-size: 13px;
  font-weight: 700;
  width: 46px;
  border: none;
  border-radius: 6px;
  ${({ active }) => (active ? 'color: white;' : 'color: #B7B7B7;')}
  ${({ active }) => (active ? 'background-color: var(--primary-color);' : 'background-color: white;')}
  ${({ active }) => active && 'cursor: pointer;'}
`;

export default Comment;
