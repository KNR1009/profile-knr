import React from 'react';
import Image from 'next/image';
// styled
import styled from 'styled-components';

import banner from '../../public/profile-banner.png';
import Link from 'next/link';

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
        {/* lg-card */}
        <div className='lg-cards'>
          <Link href='/'>
            <div className='lg-card'>
              <img className='lg-card-image' src='/game.jpg' alt='' />
              <div className='lg-card-item'>
                <h3 className='lg-card-title'>Profile</h3>
                <p className='lg-card-description'>My name is KNR. I do engineering and marketing.</p>
              </div>
            </div>
          </Link>
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
  .lg-card {
    cursor: pointer;
    border-radius: 20px;
    background-image: linear-gradient(
      to bottom right,
      rgba(244, 73, 244, 0.8),
      rgba(0, 25, 192, 0.8),
      rgba(121, 120, 230, 0.8)
    );
    height: 400px;
    position: relative;
    overflow: hidden;
  }
  .lg-card-image {
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 70%; /* Set the image height to 50% of the card height */
    object-fit: cover;
  }
  .lg-card-item {
    padding: 12px;
    h3 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 8px;
    }
    p {
      color: #ffffff;
      opacity: 0.55;
      font-size: 16px;
    }
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
