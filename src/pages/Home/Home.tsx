import styled from 'styled-components';

import Header from './Header/Header.tsx';
import MainSection from './MainSection/MainSection.tsx';
import IntroduceSection from './IntroduceSection/IntroduceSection.tsx';
import NotificationSection from './NotificationSection/NotificationSection.tsx';
import ScheduleSection from './ScheduleSection/ScheduleSection.tsx';
import ActivitySection from './ActivitySection/ActivitySection.tsx';

function Home() {
  return (
    <div>
      <Header />
      <Main>
        <MainSection />
        <IntroduceSection />
        <ActivitySection />
        <NotificationSection />
        <ScheduleSection />
      </Main>
    </div>
  );
}

const Main = styled.main`
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
