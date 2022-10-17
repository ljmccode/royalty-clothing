import styled from 'styled-components';

export const CategoryTitle = styled.div`
  text-align: center;
  text-transform: capitalize;
  font-size: 38px;
`;
export const ShopCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  max-width: 1160px;
  margin: 0 auto;
  column-gap: 20px;
  row-gap: 30px;

  @media screen and (min-width: 992px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`;
