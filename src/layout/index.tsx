import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
  isTop?: boolean;
};
export const Layout: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      {!props.isTop && (
        <Link href='/'>
          <div className='logo'>
            <Image src='/kuri.png' alt='Qiitaのトロフィー' width={30} height={30} />
            <p>KNR</p>
          </div>
        </Link>
      )}
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 12px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 8px;
  }
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
