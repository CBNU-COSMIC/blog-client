import styled from 'styled-components';

import MainSection from './MainSection/MainSection.tsx';
import IntroduceSection from './IntroduceSection/IntroduceSection.tsx';
import NotificationSection from './NotificationSection/NotificationSection.tsx';
import ScheduleSection from './ScheduleSection/ScheduleSection.tsx';
import ActivitySection from './ActivitySection/ActivitySection.tsx';

function Home() {
  return (
    <Container>
      <MainSection />
      <IntroduceSection />
      <ActivitySection />
      <NotificationSection />
      <ScheduleSection />
    </Container>
  );
}

const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
  box-sizing: border-box;
  height: calc(-75px + 100vh);
  overflow: auto;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
`;

export default Home;
