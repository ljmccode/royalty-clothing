import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductCardContainer } from '../product-card/product-card.styles';

export const Preview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 15px;
`;
export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 95%;
  max-width: 1160px;
  margin: 0 auto;

  ${ProductCardContainer} {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 992px) {
    width: 90%;

    ${Preview} {
      grid-template-columns: repeat(4, 1fr);
    }
    ${ProductCardContainer} {
      margin-bottom: 0;
    }
  }
`;
