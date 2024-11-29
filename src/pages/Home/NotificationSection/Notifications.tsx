import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import PostType from '../../../types/PostType.ts';
import getPost from '../../../apis/post/getPost.ts';

function Notifications({ selectedOption }: { selectedOption: string }) {
  const { data: notifications } = useQuery({
    queryKey: ['notifications', selectedOption],
    queryFn: () => {
      return getPost(selectedOption, 1);
    },
  });

  return (
    <Container>
      {notifications?.length ? (
        notifications.map((notification: PostType, index: number) => (
          <Content key={notification.id}>
            <Idex>{index + 1}</Idex>
            <Title href={notification.url} target="_blank">
              {notification.title}
            </Title>
            <Writer>{notification.writer}</Writer>
            <Date>{notification.createdAt.replace(/-/g, '.')}.</Date>
          </Content>
        ))
      ) : (
        <NoneNotification>등록된 공지가 없습니다.</NoneNotification>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 710px;
  height: 550px;
  flex-direction: column;
  gap: 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 37px;
  gap: 20px;
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

const NoneNotification = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  width: 710px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Notifications;
