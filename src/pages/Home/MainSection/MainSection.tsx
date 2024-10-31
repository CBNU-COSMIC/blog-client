import styled from 'styled-components';

import AnimatedSection from '../AnimationSection.tsx';
import Background from './Background.tsx';
import Ring1Icon from '../../../icons/Ring1Icon.tsx';
import Ring2Icon from '../../../icons/Ring2Icon.tsx';
import ArrowIcon from '../../../icons/ArrowIcon.tsx';

function MainSection({ scrollToNextSection }: { scrollToNextSection: () => void }) {
  return (
    <AnimatedSection>
      <Container>
        <Logo>
          <LogoText>COSMIC</LogoText>
          <Ring1>
            <Ring1Icon />
          </Ring1>
          <Ring2>
            <Ring2Icon />
          </Ring2>
        </Logo>
        <Text>충북대학교</Text>
        <Background />
        <ArrowButton onClick={scrollToNextSection}>
          <ArrowIcon />
        </ArrowButton>
      </Container>
    </AnimatedSection>
  );
}

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 317px;
`;

const LogoText = styled.div`
  font-family: 'Gmarket', sans-serif;
  font-size: 100px;
  color: var(--primary-color);
`;

const Ring1 = styled.div`
  position: absolute;
  top: 0;
  left: 18;
`;

const Ring2 = styled.div`
  position: absolute;
  top: 0;
  left: 18;
`;

const Text = styled.div`
  font-family: 'Gmarket', sans-serif;
  font-size: 95px;
  color: white;
  text-shadow:
    -1px -1px 0 var(--primary-color),
    1px -1px 0 var(--primary-color),
    -1px 1px 0 var(--primary-color),
    1px 1px 0 var(--primary-color);
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  width: 81px;
  height: 81px;
  cursor: pointer;
`;

export default MainSection;
