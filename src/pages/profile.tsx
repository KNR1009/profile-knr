import React from 'react';
import styled from 'styled-components';

// components
import { Content } from '@/components/Contents';
import { Title } from '@/components/Title';

export const Profile: React.FC = () => {
  return (
    <Wrapper>
      <Title title='Profile' />
      <Content>
        <h2>見出し2</h2>
        <p>テキストテキストテキストテキスト</p>
        <h2>見出し2</h2>
        <p>テキストテキストテキストテキスト</p>
        <h3>見出し3</h3>
        <p>テキストテキストテキストテキスト</p>
        <p>テキストテキストテキストテキスト</p>
        <h3>見出し3</h3>
        <p>テキストテキストテキストテキスト</p>
        <h3>見出し3</h3>
        <p>テキストテキストテキストテキスト</p>
        <h2>見出し2</h2>
        <ul>
          <li>箇条書きA</li>
          <li>箇条書きA</li>
          <li>箇条書きA</li>
        </ul>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
