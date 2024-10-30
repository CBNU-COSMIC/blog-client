import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AnimatedSection from '../AnimationSection.tsx';

function IntroduceSection({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement> }) {
  const navigate = useNavigate();

  const goToIntroductionPage = () => {
    navigate('/introduction');
  };

  return (
    <AnimatedSection>
      <Container ref={sectionRef}>
        <Title>충북대학교 소프트웨어 개발 동아리, COSMIC을 소개합니다</Title>
        <Intro>
          COSMIC은 2020년에 만들어진, 충북대학교 컴퓨터공학과 학생들이 모여 만든 소프트웨어 개발 동아리입니다. <br />
          COSMIC은 현재 웹/앱, 게임을 중심으로 다양한 주제의 프로젝트를 계획 및 실행하고 있으며, 공모전이나 컨퍼런스
          등의 <br />
          대외활동에 참석하거나 학술 스터디와 멘토링 등을 운영하며 꾸준히 발전하고 있는 동아리입니다.
        </Intro>
        <Title>코스믹에서 다음과 같은 활동들을 경험할 수 있습니다</Title>
        <Intro></Intro>
        <ActivityList>
          <Activity></Activity>
          <Activity></Activity>
          <Activity></Activity>
        </ActivityList>
        <MoreButton onClick={goToIntroductionPage}>더 알아보기</MoreButton>
      </Container>
    </AnimatedSection>
  );
}

const Container = styled.div`
  width: 1100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 30px;
  font-weight: bold;
`;

const Intro = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  line-height: 40px;
  margin-bottom: 40px;
  padding-top: 16px;
  text-align: center;
`;

const ActivityList = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
`;

const Activity = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f0f0f0;
`;

const MoreButton = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  width: 106px;
  height: 46px;
  padding: 8px 16px;
  box-sizing: border-box;
  border: none;
  border-radius: 32px;
  color: white;
  background-color: var(--primary-color);
  cursor: pointer;
`;

export default IntroduceSection;
