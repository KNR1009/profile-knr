import Link from 'next/link';
import Image from 'next/image';

import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  imagePath: string;
  type: 'a' | 'b';
  description: string;
  linkPath: string;
};

export const LgCard: React.FC<Props> = (props) => {
  return (
    <Wrapper className={props.type === 'b' ? 'type-b' : ''}>
      <Link href={props.linkPath}>
        <a>
          <div className='lg-card-image'>
            <Image src={props.imagePath} alt={props.title} layout='fill' objectFit='cover' />
          </div>
          <div className='lg-card-item'>
            <h3 className='lg-card-title'>{props.title}</h3>
            <p className='lg-card-description'>{props.description}</p>
          </div>
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .type-b {
    background: linear-gradient(-5deg, #479aa5, #5473cb 60%, #3e509d);
  }

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

  /* Add box-shadow for 3D effect */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25), 0 4px 6px rgba(0, 0, 0, 0.22);
  /* box-shadow: 0 12px 24px rgba(255, 255, 255, 0.2), 0 6px 8px rgba(255, 255, 255, 0.15); */

  /* Add hover effect */
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-8px);
    /* box-shadow: 0 12px 24px rgba(255, 255, 255, 0.2), 0 6px 8px rgba(255, 255, 255, 0.15); */

    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35), 0 6px 8px rgba(0, 0, 0, 0.3);
  }

  .lg-card-image {
    position: relative;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 60%; /* Set the image height to 50% of the card height */
  }
  .lg-card-item {
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
