import React from 'react';
import styled from 'styled-components';

// components
import { Content } from '@/components/Contents';
import { Title } from '@/components/Title';
import { SmCard } from '@/components/SmCard';

// link
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Profile: React.FC = () => {
  return (
    <Wrapper>
      <Title title='Profile' />
      <Content>
        <section>
          <h2>基本情報</h2>
          <p>名前:&nbsp;&nbsp;KNR</p>
          <p>出身:&nbsp;&nbsp;東京都</p>
          <p>学歴:&nbsp;&nbsp; MARCHの理系</p>
          <p>年齢:&nbsp;&nbsp;25歳の代です(2023年)</p>
          <p>趣味:&nbsp;&nbsp;お笑い, 旅行, キャンプ, DJ, カフェ巡り</p>
          <p>特技:&nbsp;&nbsp;イベント企画</p>
        </section>
        <section>
          <h2>仕事</h2>
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
