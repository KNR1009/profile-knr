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
          <h2>Qiita</h2>
          <ul>
            <li>
              <a className='a-link' href='https://qiita.com/' target='_blank' rel='noopener noreferrer'>
                「Qiita」
              </a>
              はユーザー数70万人の日本最大級のエンジニアコミュニティ
            </li>
            <li>2022年Top Contributorに選出 (上位0.0018%)</li>
            <li>9ヶ月連続月間いいね数ランキング1位</li>
            <li>Contributions数は3万</li>
            <li>フォロワー数5000人以上</li>
            <li>Qiita SILVERバッジ獲得</li>
          </ul>
          <Image src='/qiita-award.png' alt='Qiitaのトロフィー' width={350} height={250} />
        </section>
        <section>
          <h2>Zenn</h2>
          <p>経歴:&nbsp;&nbsp;新卒3年目(2023年度)</p>
          <p>職場:&nbsp;&nbsp;40名規模の渋谷のWeb系開発会社</p>
          <p>役職:&nbsp;&nbsp;執行役員(最年少)</p>
          <p>職種:&nbsp;&nbsp;エンジニア×マーケター×広報</p>
        </section>

        <h2>その他</h2>
        <p>
          同じ職種の方や経営者や役員の方で興味を持っていただけたらフォームからどうぞ
          <a className='link' href={process.env.NEXT_PUBLIC_CONTACT_LINK} target='_blank' rel='noopener noreferrer'>
            <FaExternalLinkAlt size={16} />
          </a>
        </p>
      </Content>
      <div className='can-container container' data-aos='fade-up'>
        <div className='title'>
          <h2>できること</h2>
        </div>
        <div className='sm-cards'>
          <SmCard
            title='個人'
            imagePath='/gameing.jpg'
            description='私のこれまでの経歴や得意分野をまとめています'
            linkPath='/'
          />{' '}
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
