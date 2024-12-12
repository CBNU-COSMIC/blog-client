import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import styled from 'styled-components';

import Navigation from './Navigation';
import getDetailPost from '../../apis/post/getDetailPost';
import getUser from '../../apis/auth/getUser';
import deletePost from '../../apis/post/deletePost';

function NoticeDetail() {
  const navigate = useNavigate();
  const { boardId, postId } = useParams();
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser, staleTime: Infinity, gcTime: Infinity });
  const { data: notification } = useQuery({
    queryKey: ['notification', postId],
    queryFn: () => {
      return getDetailPost(postId as string);
    },
  });

  const noticeTitle = {
    cosmic: 'COSMIC 공지',
    cse: '학과 공지',
    sw: '소중단 공지',
    cbnu: '학교 공지',
  };

  const { mutate: handleDelete } = useMutation({
    mutationFn: () => deletePost(postId as string),
    onSuccess: () => {
      navigate(`/notices/${boardId}`);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleDeleteButton = () => {
    const isConfirmed = window.confirm('글을 삭제하시겠습니까?');
    if (isConfirmed) {
      handleDelete();
    }
  };

  return (
    <Container>
      <Navigation />
      {user ? (
        <ContentContainer>
          <PageTitle>{noticeTitle[boardId as keyof typeof noticeTitle]}</PageTitle>
          <PageIntro>공지 &gt; {noticeTitle[boardId as keyof typeof noticeTitle]}</PageIntro>
          <Header>
            <Title>{notification?.title}</Title>
            {user?.username === notification?.author && (
              <ButtonContainer>
                <Button>수정</Button>
                <Button onClick={handleDeleteButton}>삭제</Button>
              </ButtonContainer>
            )}
          </Header>
          <InfoContainer>
            <Author>{notification?.author}</Author>
            <Date>
              {notification?.date.replace(/-/g, '.').split('T')[0]}. {notification?.date.split('T')[1].split(':')[0]}:
              {notification?.date.split('T')[1].split(':')[1]}
            </Date>
          </InfoContainer>
          <Content>{notification?.content}</Content>
        </ContentContainer>
      ) : (
        <CommentContainer>로그인이 필요합니다.</CommentContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 1440px;
  min-height: 700px;
  margin: 0 auto 80px;
  padding: 0 80px;
  box-sizing: border-box;
  gap: 80px;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 798px;
  flex-direction: column;
  margin-top: 80px;
`;

const PageTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 32px;
  font-weight: 500;
`;

const PageIntro = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  color: #666666;
  font-weight: 300;
  height: 24px;
  margin: 20px 0;
  border-bottom: 1px solid #d3d3d3;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 10px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  cursor: pointer;
`;

const Title = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 22px;
  font-weight: 700;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #d3d3d3;
`;

const Author = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 700;
`;

const Date = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
`;

const Content = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const CommentContainer = styled.div`
  display: flex;
  width: 798px;
  height: 500px;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-size: 30px;
  font-weight: 700;
`;

export default NoticeDetail;
