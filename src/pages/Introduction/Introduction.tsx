import { useState } from 'react';
import styled from 'styled-components';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

function Introduction() {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleZoomChanged = (map: kakao.maps.Map) => {
    const level = map.getLevel();
    if (level === 3) {
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  };

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
      <ActivityList>
        <Activity>
          <ActivityImage src="/images/seminar.jpeg" alt="정기 세미나" />
          <ActivityTitle>정기 세미나</ActivityTitle>
        </Activity>
        <Activity>
          <ActivityImage />
          <ActivityTitle>스터디</ActivityTitle>
        </Activity>
        <Activity>
          <ActivityImage src="/images/contest.png" alt="대회 참여" />
          <ActivityTitle>대회 참여</ActivityTitle>
        </Activity>
      </ActivityList>
      <ActivityList>
        <Activity>
          <ActivityImage />
          <ActivityTitle>다양한 프로젝트</ActivityTitle>
        </Activity>
        <Activity>
          <ActivityImage />
          <ActivityTitle>멘토링</ActivityTitle>
        </Activity>
        <Activity>
          <ActivityImage />
          <ActivityTitle>MT</ActivityTitle>
        </Activity>
      </ActivityList>
      <Title>동아리 위치</Title>
      <Intro>COSMIC 동방은 충북대학교 공과대학 E8-1 동 3층에 위치하고 있습니다.</Intro>
      <Map
        center={{ lat: 36.62681686526681, lng: 127.45809684246628 }}
        style={{ width: '400px', height: '500px' }}
        level={3}
        onZoomChanged={handleZoomChanged}>
        {showOverlay && (
          <CustomOverlayMap position={{ lat: 36.62748, lng: 127.4581 }}>
            <MarkerDiv>
              <LinkStyle
                href="https://m.map.kakao.com/actions/detailMapView?id=17555844&refService=place"
                target="_blank">
                충북대학교 공과대학
              </LinkStyle>
            </MarkerDiv>
          </CustomOverlayMap>
        )}
        <MapMarker position={{ lat: 36.62681686526681, lng: 127.45809684246628 }}></MapMarker>
      </Map>
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
  font-size: 18px;
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
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.6;
`;

const ActivityList = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

const Activity = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--secondary-color);
`;

const ActivityTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: white;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActivityImage = styled.img`
  width: 300px;
  height: 225px;
`;

const MarkerDiv = styled.div`
  position: relative;
  width: 100px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #e5e7eb;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid white;
  }
`;

const LinkStyle = styled.a`
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`;

export default Introduction;
