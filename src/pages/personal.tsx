import React from 'react';
import styled from 'styled-components';

// components
import { Content } from '@/components/Contents';
import { Title } from '@/components/Title';
import { SmCard } from '@/components/SmCard';

// link
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Personal: React.FC = () => {
  return (
    <Wrapper>
      <Title title='' />
      <Content>
        <section>
          <h2>私ができることの概要</h2>
          <ul>
            <li>Web系の開発や制作（要件定義から設計、開発、テスト、保守運用）</li>
            <li>記事の執筆やメディアの0→1立ち上げ</li>
            <li>GA4やBigQueryを利用したユーザーの行動分析及び改善案の提案</li>
            <li>広告運用(ディスプレイ・リスティング)</li>
            <li>もくもく会、LT会、勉強会の企画・運営やDJ</li>
            <li>SNSでのサービス等のプロモーション（月間インプレッション数1.8億）</li>
          </ul>
        </section>
        <section>
          <h2>開発系の経歴・実績</h2>
          <h3>フロントエンド(歴3年)</h3>
          <ul>
            <li>HTMLやCSSやWordPressを用いたWeb制作</li>
            <li>pugやsass等を用いたWeb制作</li>
            <li>React・Next.js・TypeScript等を用いたWebアプリのフロントエンド開発及び設計</li>
          </ul>
          <h3>バックエンド(歴1.5年)</h3>
          <ul>
            <li>DB設計やER図の作成</li>
            <li>Nest.js・Prismaを用いたAPI設計と開発</li>
            <li>Railsを用いたAPI設計と開発</li>
          </ul>
          <h3>マネジメント(歴1年)</h3>
          <ul>
            <li>エンジニアの採用・教育</li>
            <li>6~7名規模の開発でエンジニアのマネジメント</li>
            <li>工数見積もり, issue管理, レビュー, 進捗管理等</li>
          </ul>
          <h3>開発実績</h3>
          <ul>
            <li>デザイン管理システム (React, Firebase)</li>
            <li>営業DXツール (Next.js, TypeScript)</li>
            <li>医療従事者向けスケジュール管理アプリ (Rails×Next.js, TypeScript)</li>
            <li>英会話アプリ (Next.js, TypeScript)</li>
            <li>廃棄物管理アプリ (Nest.js, Prisma, Next.js)</li>
            <li>建築DXアプリ (企画コンサル, 要件定義, 設計)</li>
            <li>オンライン薬局アプリ(設計, マネジメント)</li>
          </ul>
          <h3>プロダクト開発</h3>
          <ul>
            <li>プロダクトの0→1フェーズ</li>
            <li>ヒアリングを元にした企画コンサル、要件定義、設計</li>
          </ul>
          <h3>執筆した記事の一部</h3>
          <ul>
            <li>
              <a
                className='a-link '
                href='https://qiita.com/KNR109/items/d3b6aa8803c62238d990'
                target='_blank'
                rel='noopener noreferrer'
              >
                API設計まとめ
              </a>
            </li>
            <li>
              <a
                className='a-link '
                href='https://qiita.com/KNR109/items/5d4a1954f3e8fd8eaae7'
                target='_blank'
                rel='noopener noreferrer'
              >
                データベース設計まとめ
              </a>
            </li>
            <li>
              <a
                className='a-link '
                href='https://qiita.com/KNR109/items/e13a5c5b8b461e846902'
                target='_blank'
                rel='noopener noreferrer'
              >
                フロントエンド(React)の技術質問
              </a>
            </li>
            <li>
              <a
                className='a-link '
                href='https://qiita.com/KNR109/items/7cf6b24bed318dab5715'
                target='_blank'
                rel='noopener noreferrer'
              >
                フロントエンドのテスト手法まとめ
              </a>
            </li>
            <li>
              <a
                className='a-link '
                href='https://zenn.dev/sutamac/articles/27246dfe1b5a8e'
                target='_blank'
                rel='noopener noreferrer'
              >
                フロントエンド API通信戦略
              </a>
            </li>
            <li>
              <a
                className='a-link '
                href='https://zenn.dev/sutamac/articles/5a262f0096176a'
                target='_blank'
                rel='noopener noreferrer'
              >
                エンジニアが開発しやすい環境作りをする
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>広報・マーケティング</h2>
          <h3>技術記事の執筆</h3>
          <ul>
            <li>
              Qiitaで「2022年 TOP Contributor」を受賞
              <a href='https://qiita.com/KNR109' target='_blank' rel='noopener noreferrer'>
                <span className='icon'>
                  <FaExternalLinkAlt size={15} />
                </span>
              </a>
            </li>
            <li>
              Zennで4記事連続トレンド1位
              <a href='https://zenn.dev/sutamac' target='_blank' rel='noopener noreferrer'>
                <span className='icon'>
                  <FaExternalLinkAlt size={15} />
                </span>
              </a>
            </li>
            <li>
              月間PV数1万のエンジニア向けメディアを運営
              <a href='https://sbucks-blog.com/' target='_blank' rel='noopener noreferrer'>
                <span className='icon'>
                  <FaExternalLinkAlt size={15} />
                </span>
              </a>
            </li>
            <li>技術メディアの0→1の立ち上げ経験あり</li>
          </ul>
          <h3>マーケティング</h3>
          <ul>
            <li>エンジニア・経営者向けのメディアの立ち上げ</li>
            <li>GA4やBigQueryを利用した数値分析・効果測定</li>
            <li>ABテストを利用したLPの最適案の提案</li>
            <li>GDN等の広告運用</li>
            <li>開発から行動分析、効果測定等の数値に基づくPDCAを回すのが好きです</li>
          </ul>
          <h3>採用広報</h3>
          <ul>
            <li>採用媒体にて応募数を年間1位に改善した経験有り</li>
          </ul>
        </section>
        <section>
          <h2>イベント運営</h2>
          <ul>
            <li>DJやってます。呼んでくれればやります</li>
            <li>勉強会、もくもく会、LT会など幅広いイベント企画・集客を行います</li>
          </ul>
        </section>
        <section>
          <h2>お問い合わせ</h2>
          <p>
            少しでも興味を持っていただいた方は話しましょう
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
