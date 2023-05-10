import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// components
import { Content } from '@/components/Contents';
import { Title } from '@/components/Title';
import { SmCard } from '@/components/SmCard';

// link
import { FaExternalLinkAlt } from 'react-icons/fa';

export const BlogForEngineers: React.FC = () => {
  return (
    <Wrapper>
      <Title title='運営サービス' />
      <Content>
        <section>
          <h2>
            <a href='https://sbucks-blog.com/' target='_blank' rel='noopener noreferrer'>
              スタバのブログ庫
              <span className='icon'>
                <FaExternalLinkAlt size={15} />
              </span>
            </a>
          </h2>
          <ul>
            <li>2021年より運営開始</li>
            <li>コンセプトは「エンジニアが知りたいことがまとまっているサイト」</li>
            <li>学習ロードマップや便利ツールなどを紹介</li>
            <li>月間PV数は10,000以上</li>
            <li>「WordPress 学習ロードマップ」のキーワードでSEOを1位獲得</li>
          </ul>
          <Image src='/blog-for-engineer.jpg' alt='Qiitaのトロフィー' width={400} height={250} />
        </section>
        <section>
          <h2>お問い合わせ</h2>
          <p>
            ブログメディアのM&Aや記事の執筆、広告掲載などありましたらお気軽に連絡ください。フォームへ
            <a className='link' href={process.env.NEXT_PUBLIC_CONTACT_LINK} target='_blank' rel='noopener noreferrer'>
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
            linkPath='/company'
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
