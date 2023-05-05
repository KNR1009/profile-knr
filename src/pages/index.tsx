import React from 'react';
import Image from 'next/image';
// styled
import styled from 'styled-components';

import banner from '../../public/profile-banner.png';

export const Top: React.FC = () => {
  return (
    <Wrapper>
      <div className='banner-container'>
        <Image src={banner} alt='ロゴ' className='logo-image' />
      </div>
      <div className='profile-container container'>
        <div className='title'>
          <h2>Profile・Achievements</h2>
        </div>
      </div>
      <div className='management-service-container container'>
        <div className='title'>
          <h2>Management Services</h2>
        </div>
      </div>
      <div className='can-container container'>
        <div className='title'>
          <h2>What you can do.</h2>
        </div>
      </div>
      <div className='contact-container container'>
        <div className='title'>
          <h2>Contact Us</h2>
          <h2>ああああ</h2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #ffffff;

  .container {
    margin-top: 32px;
  }
  .title {
    h2 {
      font-size: 24px;
      font-weight: bold;
    }
  }
`;
