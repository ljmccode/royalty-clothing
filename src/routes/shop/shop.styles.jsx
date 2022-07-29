import { Routes } from 'react-router-dom';

import styled from 'styled-components';

export const ProductContainerRoutes = styled(Routes)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 3rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
