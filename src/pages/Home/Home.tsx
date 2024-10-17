import styled from 'styled-components';

import Header from './Header.tsx';

const Banner = styled.div`
  width: calc(100% - 60px);
  height: 300px;
  background-color: #d9d9d9;
  margin: 40px 30px;
`;

function Home() {
  return (
    <div>
      <Header />
      <Banner></Banner>
    </div>
  );
}

export default Home;
