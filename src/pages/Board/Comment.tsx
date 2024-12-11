import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import getUser from '../../apis/auth/getUser';
import getComment from '../../apis/comment/getComment';
import writeComment from '../../apis/comment/writeComment';
import CommentType from '../../types/CommentType';
import CommentIcon from '../../icons/CommentIcon';

function Comment() {
  const { postId } = useParams();
  const queryClient = useQueryClient();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [comment, setComment] = useState('');
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser, staleTime: Infinity, gcTime: Infinity });
  const { data: comments } = useQuery({ queryKey: ['comments', postId], queryFn: () => getComment(postId as string) });

  const { mutate: handleWriteComment } = useMutation({
    mutationFn: () => writeComment({ post_id: postId as string, content: comment }),
    onSuccess: () => {
      setComment('');
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

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
      <CommentCount>
        <CommentIcon />
        댓글 {comments?.length}
      </CommentCount>
      <Comments>
        {comments?.map((comment: CommentType) => (
          <CommentContainer>
            <CommentNickname>{comment.author}</CommentNickname>
            <CommentContent>{comment.content}</CommentContent>
            <CommentDate>
              {comment.date.split('T')[0].replace(/-/g, '.')}. {comment.date.split('T')[1].split(':')[0]}:
              {comment.date.split('T')[1].split(':')[1]}
            </CommentDate>
          </CommentContainer>
        ))}
      </Comments>
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
          <Button
            active={comment ? true : false}
            onClick={() => {
              if (comment) {
                handleWriteComment();
              }
            }}>
            등록
          </Button>
        </ButtonContainer>
      </InputForm>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentCount = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 700;
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 14px;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 10px;
  border-top: 1px solid #d3d3d3;
`;

const CommentNickname = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 700;
  height: 19px;
  margin-bottom: 4px;
`;

const CommentDate = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  height: 18px;
  color: #b7b7b7;
`;

const CommentContent = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  height: 22px;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 6px;
  padding: 16px 10px 10px 18px;
`;

const NickName = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 700;
`;

const Textarea = styled.textarea`
  font-family: 'Pretendard', sans-serif;
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
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 700;
  width: 46px;
  border: none;
  border-radius: 6px;
  ${({ active }) => (active ? 'color: white;' : 'color: #B7B7B7;')}
  ${({ active }) => (active ? 'background-color: var(--tertiary-color);' : 'background-color: white;')}
  ${({ active }) => active && 'cursor: pointer;'}
`;

export default Comment;
