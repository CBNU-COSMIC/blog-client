import { useEffect, useState } from 'react';

import PostType from '../../../types/PostType.ts';
import getPost from '../../../apis/post/getPost.ts';
import styled from 'styled-components';

function Notifications({ selectedOption }: { selectedOption: number }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getPost();

      setNotifications(data);
    })();
  }, []);

  return (
    <Container>
      {notifications
        .slice((selectedOption - 1) * 10, selectedOption * 10)
        .map((notification: PostType, index: number) => (
          <Content key={notification.id}>
            <Idex>{index + 1}</Idex>
            <Title>{notification.title}</Title>
            <Writer>{notification.writer}</Writer>
            <Date>{notification.createdAt.replace(/-/g, '.')}.</Date>
            <Hits>{notification.hits}</Hits>
          </Content>
        ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
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

const Title = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  width: 420px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Writer = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  width: 80px;
`;

const Hits = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
`;

export default Notifications;
