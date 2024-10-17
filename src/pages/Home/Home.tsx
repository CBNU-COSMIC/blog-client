import styled from 'styled-components';

import Header from './Header.tsx';
import Notification from './notification.tsx';

const Main = styled.div`
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
`;

const Banner = styled.div`
  height: 300px;
  background-color: #d9d9d9;
  margin: 40px 0;
`;

function Home() {
  return (
    <div>
      <Header />
      <Main>
        <Banner />
        <Notification />
      </Main>
    </div>
  );
}

export default Home;
