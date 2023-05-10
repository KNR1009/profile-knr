import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// components
import { Content } from '@/components/Contents';
import { Title } from '@/components/Title';
import { SmCard } from '@/components/SmCard';

// link
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Achievements: React.FC = () => {
  return (
    <Wrapper>
      <Title title='受賞歴' />
      <Content>
        <section>
          <h2>
            <a href='https://qiita.com/KNR109' target='_blank' rel='noopener noreferrer'>
              Qiita
              <span className='icon'>
                <FaExternalLinkAlt size={15} />
              </span>
            </a>
          </h2>
          <ul>
            <li>Qiitaはユーザー数70万人の日本最大級のエンジニアコミュニティ</li>
            <li>2022年Top Contributorに選出 (上位0.0018%)</li>
            <li>9ヶ月連続月間いいね数ランキング1位</li>
            <li>Contributions数は3万以上</li>
            <li>フォロワー数5000人以上</li>
            <li>Qiita SILVERバッジ獲得</li>
          </ul>
          <Image src='/qiita-award.png' alt='Qiitaのトロフィー' width={350} height={250} />
        </section>
        <section>
          <h2>
            <a href='https://zenn.dev/sutamac' target='_blank' rel='noopener noreferrer'>
              Zenn
              <span className='icon'>
                <FaExternalLinkAlt size={15} />
              </span>
            </a>
          </h2>
          <ul>
            <li>4記事連続トンレド1位獲得</li>
            <li>エンジニアマネジメントや設計方法などの記事を執筆</li>
          </ul>
        </section>
        <section>
          <h2>会社関連</h2>
          <ul>
            <li>2023年に最年少執行役員に就任 (新卒3年目)</li>
          </ul>
        </section>
        <section>
          <h2>お問い合わせ</h2>
          <p>
            少しでも興味を持ってくれたらぜひ連絡ください。 フォームへ
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
