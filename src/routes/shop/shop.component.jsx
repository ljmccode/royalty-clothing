import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategories } from '../../store/categories/category.action';

import { ProductContainerRoutes } from './shop.styles.jsx';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <ProductContainerRoutes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </ProductContainerRoutes>
  );
};

export default Shop;
