import { useRef } from 'react';
import styled from 'styled-components';

import MainSection from './MainSection/MainSection.tsx';
import IntroduceSection from './IntroduceSection/IntroduceSection.tsx';
import NotificationSection from './NotificationSection/NotificationSection.tsx';
import ScheduleSection from './ScheduleSection/ScheduleSection.tsx';

function Home() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollToNextSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <MainSection scrollToNextSection={scrollToNextSection} />
      <IntroduceSection sectionRef={sectionRef} />
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
