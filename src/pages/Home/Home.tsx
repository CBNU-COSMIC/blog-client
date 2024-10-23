import styled from 'styled-components';

import Header from './Header.tsx';
import Notification from './notification.tsx';
import Schedule from './Schedule.tsx';

const Main = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
  box-sizing: border-box;
`;

const Banner = styled.div`
  height: 300px;
  background-color: #d9d9d9;
  margin: 40px 0;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Home() {
  return (
    <div>
      <Header />
      <Main>
        <Banner />
        <Contents>
          <Notification />
          <Schedule />
        </Contents>
      </Main>
    </div>
  );
}

export default Home;
