import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import styled from 'styled-components';

import Navigation from './Navigation';
import getDetailPost from '../../apis/post/getDetailPost';
import getUser from '../../apis/auth/getUser';
import deletePost from '../../apis/post/deletePost';
import Comment from './Comment';

function BoardDetail() {
  const navigate = useNavigate();
  const { boardId, postId } = useParams();
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser, staleTime: Infinity, gcTime: Infinity });
  const { data: post } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => {
      return getDetailPost(postId as string);
    },
  });

  console.log(post);

  const boardTitle = {
    'introduction-board': '가입 인사',
    'free-board': '자유 게시판',
    seminar: '세미나',
    archive: '자료실',
    gallery: '갤러리',
  };

  const { mutate: handleDelete } = useMutation({
    mutationFn: () => deletePost(postId as string),
    onSuccess: () => {
      navigate(`/board/${boardId}/1`);
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

  const handleEditButton = () => {
    navigate(`/board/${boardId}/edit/${postId}`);
  };

  return (
    <Container>
      <Navigation />
      {user ? (
        user.role !== 'guest' || boardId === 'introduction-board' ? (
          <PostContainer>
            <ContentContainer>
              <PageTitle>{boardTitle[boardId as keyof typeof boardTitle]}</PageTitle>
              <PageIntro>게시판 &gt; {boardTitle[boardId as keyof typeof boardTitle]}</PageIntro>
              <Header>
                <Title>{post?.title}</Title>
                <ButtonContainer>
                  {user.username === post?.author && <Button onClick={handleEditButton}>수정</Button>}
                  {(user.username === post?.author || user.role === 'president' || user.role === 'executive') && (
                    <Button onClick={handleDeleteButton}>삭제</Button>
                  )}
                </ButtonContainer>
              </Header>
              <InfoContainer>
                <Author>{post?.author}</Author>
                <Date>
                  {post?.date.replace(/-/g, '.').split('T')[0]}. {post?.date.split('T')[1].split(':')[0]}:
                  {post?.date.split('T')[1].split(':')[1]}
                </Date>
              </InfoContainer>
              <Content>{post?.content}</Content>
            </ContentContainer>
            <CommentContainer>
              <Comment />
            </CommentContainer>
          </PostContainer>
        ) : (
          <Error>손님 이상 등급만 글을 볼 수 있습니다.</Error>
        )
      ) : (
        <Error>로그인이 필요합니다.</Error>
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

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 80px;
  padding: 29px;
  border: 1px solid #d3d3d3;
  border-radius: 6px;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 798px;
  flex-direction: column;
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
  min-height: 300px;
  white-space: pre-wrap;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Error = styled.div`
  display: flex;
  width: 798px;
  height: 500px;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-size: 30px;
  font-weight: 700;
`;

export default BoardDetail;
