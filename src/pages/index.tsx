import React from 'react';
import Image from 'next/image';
// styled
import styled from 'styled-components';

import banner from '../../public/profile-banner.png';
import { LgCard } from '@/components/LgCard';
import { MdCard } from '@/components/MdCard';
import { SmCard } from '@/components/SmCard';
import { FaTwitter, FaGithub } from 'react-icons/fa';

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
        <div className='md-cards'>
          <MdCard
            title='Blog for Engineers'
            imagePath='/fnt.jpg'
            description='I run an information blog for engineers.'
            linkPath='/'
          />
          <MdCard
            title='management-bookshelf'
            imagePath='/rain.jpg'
            description='A service that introduces books recommended by management'
            linkPath='/'
          />
        </div>
      </div>
      <div className='can-container container'>
        <div className='title'>
          <h2>What you can do.</h2>
        </div>
        <div className='sm-cards'>
          <SmCard title='personal' imagePath='/gameing.jpg' description='Personal Skills.' linkPath='/' />{' '}
          <SmCard
            title='company'
            imagePath='/pc.jpg'
            description='These are the services my company can provide'
            linkPath='/'
          />
          <SmCard
            title='event'
            imagePath='/dj.jpg'
            description='I also organize events for engineers and creators and DJ.'
            linkPath='/'
          />
        </div>
      </div>
      <div className='contact-container container'>
        <div className='title'>
          <h2>Other Links</h2>
        </div>
        <div className='icon-cards'>
          {/* Twitterカード */}
          <div className='icon-card  twitter-icon-card'>
            <div className='twitter-icon'>
              <FaTwitter size='100' />
            </div>
          </div>
          {/* Twitterカード */}
          {/* Qiitaカード */}
          <div className='icon-card  qiita-icon-card'>
            <div className='qiita-icon'>
              <Image src='/qiita.png' alt='Qiitaアイコン' width={100} height={100} />
            </div>
          </div>
          {/* Qiitaカード */}
          {/* Zennカード */}
          <div className='icon-card  zenn-icon-card'>
            <div className='zenn-icon'>
              <Image src='/zenn.png' alt='Qiitaアイコン' width={120} height={27} />
            </div>
          </div>
          {/* Zennカード */}
          {/* GitHubカード */}
          <div className='icon-card  github-icon-card'>
            <div className='github-icon '>
              <FaGithub size='100' color='black' />
            </div>
          </div>
          {/* Githubカード */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .icon-cards {
    margin-top: 24px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 765px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .qiita-icon-card {
    background: linear-gradient(144deg, #f2f2f2, #ffffff 50%, #e8e8e8);
    background: linear-gradient(144deg, #b1e5d5, #fff 70%, #e6f9d6);
  }
  .github-icon-card {
    background: linear-gradient(144deg, #fff, #c3cbff 60%, #af99ff);
  }
  .zenn-icon-card {
    background: linear-gradient(144deg, #fff, #b8d3ff 70%, #8fceff);
  }
  .qiita-icon .zenn-icon {
    position: relative;
  }

  .icon-card {
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25), 0 4px 6px rgba(0, 0, 0, 0.22); /* Add box-shadow */

    /* Add hover effect */
    transition: transform 0.3s;
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35), 0 6px 8px rgba(0, 0, 0, 0.3);
    }
  }

  .twitter-icon-card {
    background: linear-gradient(144deg, #64a7e5, #1da1f2 50%, #157ac7);
  }

  .twitter-icon,
  .github-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  color: #ffffff;
  .sm-cards {
    margin-top: 24px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 765px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .md-cards {
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
    background-image: linear-gradient(to bottom right, rgba(52, 152, 219, 0.8), rgba(26, 188, 156, 0.8));
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
