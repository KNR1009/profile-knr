import React from 'react';
import Image from 'next/image';
// styled
import styled from 'styled-components';

import banner from '../../public/profile-banner.png';
import { LgCard } from '@/components/LgCard';

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
        <div className='lg-cards'>
          <LgCard
            title='Profile'
            imagePath='/game.jpg'
            type='a'
            description='My name is KNR. I do engineering and marketing.'
            linkPath='/'
          />
          <LgCard
            title='Achievements'
            imagePath='/nft-city.jpg'
            type='b'
            description='Here are some of my career highlights and awards to date.'
            linkPath='/'
          />
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
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #ffffff;

  /* lg-card */
  .lg-cards {
    margin-top: 24px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 765px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .type-b {
    background: linear-gradient(-5deg, #479aa5, #5473cb 60%, #3e509d);
  }

  .container {
    margin-top: 32px;
  }
  .title {
    h2 {
      font-size: 32px;
      font-weight: bold;
    }
  }
`;
