import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <Contents>
        <CopyrightContainer>
          <Copyright>Copyright 2024. COSMIC. all rights reserved. </Copyright>
          <Copyright>충청북도 청주시 서원구 충대로 1, 충북대학교 공과대학(E8-1) 3층</Copyright>
        </CopyrightContainer>
        <div>copyright</div>
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

export default Footer;
