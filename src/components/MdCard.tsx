import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';

type Props = {
  title: string;
  imagePath: string;
  description: string;
  linkPath: string;
};

export const MdCard: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <Link href={props.linkPath}>
        <a className='md-container'>
          <div className='md-card-image'>
            <img src={props.imagePath} alt={props.title} />
          </div>
          <div className='md-card-item'>
            <h3 className='md-card-title'>{props.title}</h3>
            <p className='md-card-description'>{props.description}</p>
          </div>
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Add hover effect */
  transition: transform 0.3s;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25), 0 4px 6px rgba(0, 0, 0, 0.22);

  &:hover {
    transform: translateY(-8px);
    /* box-shadow: 0 12px 24px rgba(255, 255, 255, 0.2), 0 6px 8px rgba(255, 255, 255, 0.15); */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35), 0 6px 8px rgba(0, 0, 0, 0.3);
  }
  .md-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    cursor: pointer;
    border-radius: 20px;
    background-color: #2c2f48;
    height: 230px;
    overflow: hidden;
  }
  .md-card-image {
    img {
      border-radius: 20px 0 0 20px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .md-card-item {
    padding: 24px;

    h3 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 8px;
    }
    p {
      color: #ffffff;
      opacity: 0.8;
      font-size: 16px;
    }
  }
`;
