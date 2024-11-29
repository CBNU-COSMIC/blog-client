import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import getPost from '../../apis/post/getPost.ts';
import PostType from '../../types/PostType.ts';
import RightArrowIcon from '../../icons/RightArrowIcon.tsx';

function Notices() {
  const { boardId } = useParams();
  const { data: notifications } = useQuery({
    queryKey: ['notifications', boardId],
    queryFn: () => {
      return getPost(boardId as string, 1);
    },
  });

  return (
    <Container>
      <Navigation>
        <NavigationTitle>공지</NavigationTitle>
        <NavigationItem isSelected={false}>
          COSMIC 공지 <RightArrowIcon color={'black'} />
        </NavigationItem>
        <NavigationItem isSelected={true}>
          학교 공지 <RightArrowIcon color={'white'} />
        </NavigationItem>
        <NavigationItem isSelected={false}>
          학과 공지 <RightArrowIcon color={'black'} />
        </NavigationItem>
        <NavigationItem isSelected={false}>
          소중단 공지 <RightArrowIcon color={'black'} />
        </NavigationItem>
      </Navigation>
      <ContentContainer>
        <PageTitle>학교 공지</PageTitle>
        <PageIntro>게시판 &gt; 공지 &gt; 학교 공지</PageIntro>
        <ContentsIntro>
          <IndexTitle>번호</IndexTitle>
          <TitleTitle>제목</TitleTitle>
          <Writer>작성자</Writer>
          <Date>작성일</Date>
          <Hits>조회수</Hits>
        </ContentsIntro>
        <Contents>
          {notifications.length ? (
            notifications.map((notification: PostType, index: number) => (
              <Content key={notification.id}>
                <Idex>{index + 1}</Idex>
                <Title href={notification.url} target="_blank">
                  {notification.title}
                </Title>
                <Writer>{notification.writer}</Writer>
                <Date>{notification.createdAt.replace(/-/g, '.')}.</Date>
                <Hits>{notification.hits}</Hits>
              </Content>
            ))
          ) : (
            <NoneNotification>등록된 공지가 없습니다.</NoneNotification>
          )}
        </Contents>
        <PageList>
          <PageNumber isSelected={true}>1</PageNumber>
          <PageNumber isSelected={false}>2</PageNumber>
          <PageNumber isSelected={false}>3</PageNumber>
          <PageNumber isSelected={false}>4</PageNumber>
        </PageList>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 1440px;
  margin: 0 auto 80px;
  padding: 0 80px;
  box-sizing: border-box;
  gap: 80px;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const NavigationTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: white;
  background-color: var(--tertiary-color);
`;

const NavigationItem = styled.button<{ isSelected: boolean }>`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  background-color: ${({ isSelected }) => (isSelected ? 'var(--tertiary-color)' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  padding: 20px;
  border: none;
  cursor: pointer;
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
  width: 798px;
  height: 560px;
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

const Title = styled.a`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  color: black;
  width: 420px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  text-decoration: none;

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

const NoneNotification = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  width: 798px;
  height: 560px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Notices;
