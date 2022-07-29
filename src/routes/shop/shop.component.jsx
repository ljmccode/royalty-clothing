import { Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { ProductContainerRoutes } from './shop.styles.jsx';

const Shop = () => {
  return (
    <ProductContainerRoutes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </ProductContainerRoutes>
  );
};

export default Shop;
