import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import getPost from '../../apis/post/getPost.ts';
import PostType from '../../types/PostType.ts';
import getUser from '../../apis/auth/getUser.ts';
import Navigation from './Navigation.tsx';
import getPostCount from '../../apis/post/getPostCount.ts';

function Notices() {
  const navigate = useNavigate();
  const { boardId, page } = useParams();
  const [pageGroup, setPageGroup] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser, staleTime: Infinity, gcTime: Infinity });
  const { data: notifications } = useQuery({
    queryKey: ['notifications', boardId, page],
    queryFn: () => {
      return getPost(boardId as string, page as string);
    },
  });
  const { data: postCount } = useQuery({
    queryKey: ['postCount', boardId],
    queryFn: () => {
      return getPostCount(boardId as string);
    },
  });

  useEffect(() => {
    setStartPage((pageGroup - 1) * 10 + 1);
    setEndPage(Math.min(pageGroup * 10, Math.ceil(postCount?.count / 10)));
  }, [postCount, pageGroup]);

  const handlePageClick = (page: number) => {
    navigate(`/notices/${boardId}/${page}`);
  };

  const handlePrevGroup = () => {
    if (pageGroup > 1) {
      setPageGroup((prev) => prev - 1);
    }
  };

  const handleNextGroup = () => {
    if (pageGroup * 10 < Math.ceil(postCount?.count / 10)) {
      setPageGroup((prev) => prev + 1);
    }
  };

  const noticeTitle = {
    cosmic: 'COSMIC 공지',
    cse: '학과 공지',
    sw: '소중단 공지',
    cbnu: '학교 공지',
  };

  const navigateToWrite = () => {
    navigate(`/notices/${boardId}/write`);
  };

  return (
    <Container>
      <Navigation />
      <ContentContainer>
        <PageTitle>{noticeTitle[boardId as keyof typeof noticeTitle]}</PageTitle>
        <PageIntro>공지 &gt; {noticeTitle[boardId as keyof typeof noticeTitle]}</PageIntro>
        <ContentsIntro>
          <IndexTitle>번호</IndexTitle>
          <TitleTitle>제목</TitleTitle>
          <Writer>{boardId === 'cosmic' && '작성자'}</Writer>
          <Date>작성일</Date>
          <Hits>조회수</Hits>
        </ContentsIntro>
        <Contents>
          {notifications?.length ? (
            notifications.map((notification: PostType, index: number) => (
              <Content key={notification.post_id}>
                <Idex>{(+(page as string) - 1) * 10 + index + 1}</Idex>
                {notification.link === '' ? (
                  <Title
                    onClick={() => {
                      navigate(`/notices/${boardId}/detail/${notification.post_id}`);
                    }}>
                    {notification.title}
                  </Title>
                ) : (
                  <TitleLink href={notification.link} target="_blank">
                    {notification.title}
                  </TitleLink>
                )}
                <Writer>{notification.author}</Writer>
                <Date>{notification.date.replace(/-/g, '.').split('T')[0]}.</Date>
                <Hits>{notification.hits}</Hits>
              </Content>
            ))
          ) : (
            <NoneNotification>등록된 공지가 없습니다.</NoneNotification>
          )}
        </Contents>
        {boardId === 'cosmic' && user && (user.role === 'president' || user.role === 'executive') && (
          <WriteButton onClick={navigateToWrite}>글 쓰기</WriteButton>
        )}
        <PageList>
          {pageGroup !== 1 ? (
            <PageNumber isSelected={false} onClick={handlePrevGroup} disabled={pageGroup === 1}>
              &lt;
            </PageNumber>
          ) : (
            <HiddenButton />
          )}
          {Array.from({ length: endPage - startPage + 1 }, (_, idx) => {
            const pageNumber = startPage + idx;
            return (
              <PageNumber
                key={pageNumber}
                isSelected={pageNumber === +(page as string)}
                onClick={() => handlePageClick(pageNumber)}>
                {pageNumber}
              </PageNumber>
            );
          })}
          {endPage !== Math.ceil(postCount?.count / 10) ? (
            <PageNumber isSelected={false} onClick={handleNextGroup} disabled={endPage === 130}>
              &gt;
            </PageNumber>
          ) : (
            <HiddenButton />
          )}
        </PageList>
      </ContentContainer>
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

const ContentsIntro = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  height: 37px;
  margin-bottom: 10px;
  background-color: #f8f8f8;
`;

const IndexTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  width: 50px;
  text-align: center;
`;
const TitleTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  width: 420px;
  text-align: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 37px;
  gap: 20px;
  border-bottom: 1px solid #d3d3d3;
`;

const Idex = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 11px;
  width: 50px;
  text-align: center;
`;

const Title = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  color: black;
  width: 420px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: inherit;
  }
`;

const TitleLink = styled.a`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  color: black;
  width: 420px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: inherit;
  }
`;

const Writer = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const Date = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  width: 80px;
  text-align: center;
`;

const Hits = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  width: 68px;
  text-align: center;
`;

const PageList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 32px;
  gap: 10px;
  background-color: #f8f8f8;
`;

const PageNumber = styled.button<{ isSelected: boolean }>`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${({ isSelected }) => (isSelected ? 'white' : '#f8f8f8')};
  color: ${({ isSelected }) => (isSelected ? 'var(--primary-color)' : 'black')};
  ${({ isSelected }) => (isSelected ? 'border: 1px solid #d3d3d3' : 'border: none')};
  cursor: pointer;
`;

const HiddenButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: #f8f8f8;
  border: none;
`;

const NoneNotification = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  width: 798px;
  height: 215px;
  display: flex;
  border-bottom: 1px solid #d3d3d3;
  justify-content: center;
  align-items: center;
`;

const WriteButton = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  width: 74px;
  height: 36px;
  border: 1px solid #d3d3d3;
  background-color: white;
  margin: 10px 0 0 720px;
  cursor: pointer;
`;

export default Notices;
