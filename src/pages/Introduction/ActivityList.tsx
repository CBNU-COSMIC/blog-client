import styled from 'styled-components';
import Activity from '../../components/Activity/Activity.tsx';

function ActivityList() {
  return (
    <div>
      <ActivityListContainer>
        <Activity
          title="정기 세미나"
          intro={`달마다 주요 공지사항을 \n 전달하고, 근황을 공유하는 정기 세미나를 진행합니다.`}
          image="/images/seminar.jpeg"
        />
        <Activity
          title="스터디"
          intro={`북스터디, 알고리즘 스터디, \n CS 스터디 등의 다양한 \n 스터디를 진행합니다.`}
          image="/images/study.png"
        />
        <Activity
          title="대회 참여"
          intro="K-해커톤이나 Solved-Up 등의 다양한 교내/외 대회에 참가합니다."
          image="/images/contest.png"
        />
      </ActivityListContainer>
      <ActivityListContainer>
        <Activity
          title="프로젝트"
          intro={`팀원을 모아서 웹/앱, \n 게임 등을 개발하는 다양한 \n 프로젝트를 진행합니다.`}
          image="/images/seminar.jpeg"
        />
        <Activity
          title="멘토링"
          intro={`후배들이 선배들에게 \n 도움을 받을 수 있는 \n 멘토링을 진행합니다.`}
          image="/images/seminar.jpeg"
        />
        <Activity
          title="MT"
          intro={`동아리 부원끼리 \n 친목 도모를 위해  \n 방학 중에 MT를 갑니다.`}
          image="/images/MT.jpeg"
        />
      </ActivityListContainer>
    </div>
  );
}

const ActivityListContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

export default ActivityList;
