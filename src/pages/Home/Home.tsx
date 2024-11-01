import { useRef } from 'react';
import styled from 'styled-components';

import MainSection from './MainSection/MainSection.tsx';
import IntroduceSection from './IntroduceSection/IntroduceSection.tsx';
import NotificationSection from './NotificationSection/NotificationSection.tsx';
import ScheduleSection from './ScheduleSection/ScheduleSection.tsx';
import Footer from '../../components/Layout/Footer/Footer.tsx';
import Header from '../../components/Layout/Header/Header.tsx';

function Home() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollToNextSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <MainSection scrollToNextSection={scrollToNextSection} />
        <IntroduceSection sectionRef={sectionRef} />
        <NotificationSection />
        <ScheduleSection />
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100vw;
  height: calc(-75px + 100vh);
  overflow: auto;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  scroll-behavior: smooth;
`;

const FooterContainer = styled.div`
  scroll-snap-align: start;
`;

export default Home;
