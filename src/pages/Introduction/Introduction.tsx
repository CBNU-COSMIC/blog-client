import styled from 'styled-components';

function Introduction() {
  return (
    <Container>
      <Title>동아리 소개</Title>
      <Intro>
        COSMIC은 2020년에 만들어진, 충북대학교 컴퓨터공학과 학생들이 모여 만든 소프트웨어 개발 동아리입니다. <br />
        COSMIC은 현재 웹/앱, 게임을 중심으로 다양한 주제의 프로젝트를 계획 및 실행하고 있으며, 공모전이나 컨퍼런스 등의
        대외활동에 참석하거나 학술 스터디와 멘토링 등을 운영하며 꾸준히 발전하고 있는 동아리입니다.
      </Intro>
      <Highlight>COSMIC은 다음과 같은 사람들이 모였습니다: </Highlight>
      <List>
        <ListItem>평소에 개발을 즐겨하고, 다른 사람들과 함께 프로젝트를 해보고 싶은 사람</ListItem>
        <ListItem>앱 출시 등 실제 유저가 쓰는 서비스를 개발하고 싶은 사람</ListItem>
        <ListItem>직접 만들어보고 싶은 뚜렷한 프로젝트 구상이 있는 사람</ListItem>
        <ListItem>슬랙, 노션, JIRA 등 실무에서 쓰이는 협업 툴로 프로젝트를 운영하는 방법을 익히고 싶은 사람</ListItem>
        <ListItem>생소한 분야(게임, 3D 그래픽스, 머신러닝 등)의 기술로 프로젝트를 해보고 싶은 사람</ListItem>
        <ListItem>소프트웨어 마에스트로나 인턴십 등 대외 활동에 관심이 많은 사람</ListItem>
      </List>
      <Intro>COSMIC과 함께 한다면 많은 성장을 경험할 수 있을 것입니다.</Intro>
      <Title>동아리 활동</Title>
      <Title>동아리 위치</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 1440px;
  margin: 0 auto;
  padding: 80px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 36px;
  font-weight: bold;
  height: 50px;
  border-bottom: 1px solid #000;
  margin: 20px 0;
`;

const Intro = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Highlight = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-weight: bold;
`;

const List = styled.ul`
  font-family: 'Pretendard', sans-serif;
  margin: 20px 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-family: 'Pretendard', sans-serif;
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.6;
`;

export default Introduction;
