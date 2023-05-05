import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  imagePath: string;
  description: string;
  linkPath: string;
};

export const SmCard: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <Link href={props.linkPath}>
        <a>
          <div className='sm-card-image'>
            <Image src={props.imagePath} alt={props.title} layout='fill' objectFit='cover' />
          </div>
          <div className='sm-card-item'>
            <h3 className='sm-card-title'>{props.title}</h3>
            <p className='sm-card-description'>{props.description}</p>
          </div>
        </a>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  cursor: pointer;
  border-radius: 20px;
  background-image: #353d5e;
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

  .sm-card-image {
    position: relative;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 60%; /* Set the image height to 50% of the card height */
  }
  .sm-card-item {
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
