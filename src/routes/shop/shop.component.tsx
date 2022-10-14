import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategories } from '../../store/categories/category.action';

import { ProductContainerRoutes } from './shop.styles';

const Shop = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line
  }, []);

  return (
    <ProductContainerRoutes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </ProductContainerRoutes>
  );
};

export default Shop;
