import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// components
import { Content } from '@/components/Contents';
import { Title } from '@/components/Title';
import { SmCard } from '@/components/SmCard';

// link
import { FaExternalLinkAlt } from 'react-icons/fa';

export const ManagementBookshelf: React.FC = () => {
  return (
    <Wrapper>
      <Title title='運営サービス' />
      <Content>
        <section>
          <h2>
            <a href='https://management-bookshelf.com/' target='_blank' rel='noopener noreferrer'>
              経営者の本棚
              <span className='icon'>
                <FaExternalLinkAlt size={15} />
              </span>
            </a>
          </h2>
          <ul>
            <li>経営者・役員の読んでいる本についてフォーカスしたメディア</li>
            <li>2023年5月にリリース</li>
            <li>インタビュー・記事作成・PRまで一貫して行います</li>
          </ul>
          <Image src='/management-bookshelf.jpg' alt='Qiitaのトロフィー' width={400} height={300} />
        </section>
        <section>
          <h2>その他</h2>
          <p>
            経営者の本棚のインタビューを受けてくれる方は絶賛大募集してます
            <a className='link' href='https://management-bookshelf.com/form' target='_blank' rel='noopener noreferrer'>
              <FaExternalLinkAlt size={16} />
            </a>
          </p>
        </section>
      </Content>
      <div className='can-container container'>
        <div className='title'>
          <h2>できること</h2>
        </div>
        <div className='sm-cards'>
          <SmCard
            title='個人'
            imagePath='/gameing.jpg'
            description='私のこれまでの経歴や得意分野をまとめています'
            linkPath='/personal'
          />
          <SmCard
            title='会社'
            imagePath='/pc.jpg'
            description='会社ができることや提供サービスを紹介します。'
            linkPath='/'
          />
          <SmCard
            title='イベント運営'
            imagePath='/dj.jpg'
            description='勉強会やもくもく会などイベントの共同開催や企画運営。DJイベントにも参加できます。'
            linkPath='/'
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    margin-top: 48px;
    color: #ffffff;
    h2 {
      font-size: 32px;
      font-weight: bold;
    }
  }
  .icon {
    margin-left: 8px;
  }
  .a-link {
    color: #1a73e8;
    text-decoration: underline;
  }
  .link {
    margin-left: 8px;
  }
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
`;
