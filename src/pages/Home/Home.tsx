import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #d9d9d9;
`;

function Home() {
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default Home;
