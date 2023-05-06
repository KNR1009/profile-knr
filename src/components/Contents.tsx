import React, { useEffect } from 'react';
import styled from 'styled-components';

// fade-in
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSSをインポート

type Props = { children: React.ReactNode };
export const Content: React.FC<Props> = (props) => {
  // fade-inの初期化
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);
  return <Wrapper data-aos='fade-up'>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  color: #333333;
  margin-top: 24px;
  padding: 24px;
  border-radius: 20px;
  /* box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.3); */
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 1),
    rgba(240, 230, 250, 1),
    rgba(230, 210, 240, 1)
  );
  section {
    margin-bottom: 48px;
  }
  h2 {
    padding-bottom: 0.3em;
    margin-bottom: 32px;
    font-size: 30px;
    font-weight: bold;
    border-bottom: 1px solid #5c93bb95;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 24px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 24px;
    margin-bottom: 0.7em;
  }
  ul {
    list-style: inside;
    li {
      font-size: 16px;
      letter-spacing: 0.5px;
      line-height: 24px;
      margin-bottom: 0.7em;
    }
  }
`;
