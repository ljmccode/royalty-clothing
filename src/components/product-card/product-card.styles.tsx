import styled from 'styled-components';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

type ProductImageProps = {
  imageUrl: string
}

export const ProductImage = styled.div<ProductImageProps>`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 348px;
  align-items: center;
  position: relative;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    ${ProductImage} {
      opacity: 0.8;
    }
    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  .name {
    width: 90%;
    margin-bottom: 15px;
  }
  .price {
    width: 10%;
  }

  @media screen and (min-width: 600px) {
    font-size: 1.25rem;
  }
`;
