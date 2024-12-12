import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import styled from 'styled-components';

import getDetailPost from '../../apis/post/getDetailPost';
import editPost from '../../apis/post/editPost';

function Edit() {
  const navigate = useNavigate();
  const { boardId, postId } = useParams();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { data: post } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => {
      return getDetailPost(postId as string);
    },
  });

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const boardTitle = {
    'introduction-board': '가입 인사',
    'free-board': '자유 게시판',
    seminar: '세미나',
    archive: '자료실',
    gallery: '갤러리',
    cosmic: 'COSMIC 공지',
  };

  const { mutate: edit } = useMutation({
    mutationFn: () => editPost(postId as string, title, content),
    onSuccess: () => {
      navigate(`/${location.pathname.split('/')[1]}/${boardId}`, {
        replace: true,
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <Container>
      <Header>
        <Text>{boardTitle[boardId as keyof typeof boardTitle]}</Text>
        <Button
          onClick={() => {
            if (!title.trim() || !content.trim()) {
              alert('제목 또는 내용을 입력해주세요.');
              return;
            }
            edit();
          }}>
          수정
        </Button>
      </Header>
      <TitleInput
        placeholder="제목을 입력해 주세요."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <ContentInput
        placeholder="내용을 입력하세요."
        value={content}
        onChange={(event) => setContent(event.target.value)}></ContentInput>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1440px;
  margin: 0 auto;
  padding: 80px 180px;
  box-sizing: border-box;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  border-bottom: 1px solid #d3d3d3;
`;

const Text = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 500;
`;

const Button = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 13px 16px 11px;
  border: none;
  border-radius: 10px;
  background-color: #f5f6f8;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    outline: 1px solid #d3d3d3;
  }

  ::placeholder {
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
  }
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 500px;
  border: #f5f6f8;
  border-radius: 10px;
  background-color: white;
  padding: 50px 30px;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  outline: 1px solid #d3d3d3;
  box-sizing: border-box;
  resize: none;

  ::placeholder {
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
  }
`;

export default Edit;
