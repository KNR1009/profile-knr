import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
};
export const Layout: React.FC<Props> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  /* 余白調整 */
  padding: 48px;
  @media (max-width: 1024px) {
    padding: 32px;
  }

  @media (max-width: 765px) {
    padding: 24px;
  }
`;
