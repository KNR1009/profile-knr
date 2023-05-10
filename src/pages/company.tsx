import React from 'react';
import styled from 'styled-components';

// components
import { Content } from '@/components/Contents';
import { Title } from '@/components/Title';
import { SmCard } from '@/components/SmCard';

// link
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Company: React.FC = () => {
  return (
    <Wrapper>
      <Title title='' />
      <Content>
        <section>
          <h2>私の職場ができること概要</h2>
          <ul>
            <li>Webアプリの要件定義, 設計, デザイン, 開発, テスト, 保守運用など一貫して行います</li>
            <li>フロントエンド, サーバーサイド, インフラ, IOSなど幅広い開発を得意としています</li>
            <li>WebサイトやLP内のユーザーの行動分析及び改善・提案</li>
            <li>デザインシステムを整理する自社サービスの提供</li>
          </ul>
        </section>
        <section>
          <h2>開発実績</h2>
          <ul>
            <li>デザイン管理システム (React, Firebase)</li>
            <li>独自CMS開発 (Next.js, Prisma, AWS)</li>
            <li>AI営業ロープレツール(Next.js, Rails, python)</li>
            <li>不動産投資シミュレーションアプリ(Next.js, Python, Laravel)</li>
            <li>営業DXツール (Next.js, TypeScript)</li>
            <li>医療従事者向けスケジュール管理アプリ (Rails×Next.js, TypeScript)</li>
            <li>英会話アプリ (Next.js, TypeScript)</li>
            <li>廃棄物管理アプリ (Nest.js, Prisma, Next.js)</li>
            <li>建築DXアプリ (企画コンサル, 要件定義, 設計)</li>
            <li>オンライン薬局アプリ(設計, マネジメント)</li>
            <li>他多数</li>
          </ul>
        </section>

        <section>
          <h2>お問い合わせ</h2>
          <p>
            会社の提供サービスやより詳しい内容についてぜひお問い合わせください
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
  .icon {
    margin-left: 8px;
  }
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
  .a-link {
    color: #1a73e8;
    text-decoration: underline;
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
