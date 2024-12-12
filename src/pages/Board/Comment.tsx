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
  const editTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [commentContent, setCommentContent] = useState('');
  const [editCommentId, setEditCommentId] = useState('');
  const [editCommentContent, setEditCommentContent] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser, staleTime: Infinity, gcTime: Infinity });
  const { data: comments } = useQuery({ queryKey: ['comments', postId], queryFn: () => getComment(postId as string) });

  console.log(comments);

  const { mutate: handleWriteComment } = useMutation({
    mutationFn: () => writeComment({ post_id: postId as string, content: commentContent }),
    onSuccess: () => {
      setCommentContent('');
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

  const handleEditInput = () => {
    const textarea = editTextareaRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    if (textarea.scrollHeight === 16) {
      textarea.style.height = '15px';
      return;
    }
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleEditCommentButton = (id: string, text: string) => {
    setIsEdit(true);
    setEditCommentId(id);
    setEditCommentContent(text);
    setTimeout(() => {
      if (editTextareaRef.current) {
        if (editTextareaRef.current.scrollHeight === 16) {
          editTextareaRef.current.style.height = '15px';
          return;
        }
        editTextareaRef.current.style.height = 'auto';
        editTextareaRef.current.style.height = `${editTextareaRef.current.scrollHeight}px`;
      }
    }, 0);
  };

  return (
    <Container>
      <CommentCount>
        <CommentIcon />
        댓글 {comments?.length}
      </CommentCount>
      <Comments>
        {comments?.map((comment: CommentType) => (
          <div>
            {isEdit && comment.comment_id === editCommentId ? (
              <CommentContainer>
                <InputForm>
                  <NickName>{user?.username}</NickName>
                  <Textarea
                    ref={editTextareaRef}
                    value={editCommentContent}
                    rows={1}
                    placeholder="댓글을 남겨보세요"
                    onChange={(event) => setEditCommentContent(event.target.value)}
                    onInput={handleEditInput}
                  />
                  <ButtonContainer>
                    <Button
                      active={false}
                      onClick={() => {
                        setIsEdit(false);
                        setEditCommentContent('');
                      }}>
                      취소
                    </Button>
                    <Button active={editCommentContent ? true : false}>수정</Button>
                  </ButtonContainer>
                </InputForm>
              </CommentContainer>
            ) : (
              <CommentContainer>
                <CommentNickname>
                  {comment.author}
                  {user?.username === comment.author && (
                    <EditDeleteButtonContainer>
                      <EditDeleteButton onClick={() => handleEditCommentButton(comment.comment_id, comment.content)}>
                        수정
                      </EditDeleteButton>
                      <EditDeleteButton>삭제</EditDeleteButton>
                    </EditDeleteButtonContainer>
                  )}
                </CommentNickname>
                <CommentContent>{comment.content}</CommentContent>
                <CommentDate>
                  {comment.date.split('T')[0].replace(/-/g, '.')}. {comment.date.split('T')[1].split(':')[0]}:
                  {comment.date.split('T')[1].split(':')[1]}
                </CommentDate>
              </CommentContainer>
            )}
          </div>
        ))}
      </Comments>
      <InputForm>
        <NickName>{user?.username}</NickName>
        <Textarea
          ref={textareaRef}
          value={commentContent}
          rows={1}
          placeholder="댓글을 남겨보세요"
          onChange={(event) => setCommentContent(event.target.value)}
          onInput={handleInput}
        />
        <ButtonContainer>
          <Button
            active={commentContent ? true : false}
            onClick={() => {
              if (commentContent) {
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
  gap: 3px;
`;

const CommentNickname = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 700;
  height: 19px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
`;

const EditDeleteButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const EditDeleteButton = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 12 px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  cursor: pointer;
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
  min-height: 15px;
  padding-bottom: 7px;
  width: 798px;
  max-width: 798px;
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
  width: 770px;
  max-width: 798px;
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
  gap: 10px;
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
  cursor: pointer;
`;

export default Comment;
