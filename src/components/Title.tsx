import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
};

export const Title: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <h2>{props.title}</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2 {
    font-size: 32px;
    font-weight: bold;
    color: #ffffff;
  }
`;
