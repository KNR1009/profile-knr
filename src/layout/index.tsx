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
  padding: 24px;
`;
