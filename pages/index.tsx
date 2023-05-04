import type { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <h2>aaaa</h2>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  h2 {
    font-size: 40px;
    font-weight: bold;
  }
`;
