import styled from 'styled-components';

import InstaIcon from '../../../icons/InstaIcon.tsx';
import GitHubIcon from '../../../icons/GitHubIcon.tsx';
import EmailIcon2 from '../../../icons/EmailIcon2.tsx';

function Footer() {
  const openEmail = () => {
    window.open('mailto:kiuuon29@gmail.com');
  };

  const openGitHub = () => {
    window.open('https://github.com/CBNU-COSMIC');
  };

  return (
    <Container>
      <Contents>
        <CopyrightContainer>
          <Copyright>Copyright 2024. COSMIC. all rights reserved.</Copyright>
          <Copyright>충청북도 청주시 서원구 충대로 1, 충북대학교 공과대학(E8-1동) 3층</Copyright>
        </CopyrightContainer>
        <ButtonContainer>
          <Button color="var(--tertiary-color)" onClick={openEmail}>
            <EmailIcon2 />
          </Button>
          <Button color="var(--primary-color)" onClick={openGitHub}>
            <GitHubIcon />
          </Button>
          <Button color="var(--secondary-color)">
            <InstaIcon />
          </Button>
        </ButtonContainer>
      </Contents>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 170px;
  background-color: #f5f6f7;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  height: 70px;
`;

const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Copyright = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  color: #868e96;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button<{ color: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #0c5235;
  background-color: ${({ color }) => color};
  cursor: pointer;
  box-shadow: 4px 4px #0c5235;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 0 #0c5235;
  }
`;

export default Footer;
