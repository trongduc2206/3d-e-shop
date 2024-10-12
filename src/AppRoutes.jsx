import { Route, Routes } from 'react-router-dom';
import paths from './utilities/pathnames';
import { MainPage } from './MainPage';
import { CategoryPage } from './ProductList';
import { ProductPage } from './Product';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={paths.home.path} element={<div>Main Page</div>} />
      <Route path={paths.category.path} element={<div>Category Page</div>} />
      <Route path={paths.product.path} element={<div>Product Page</div>} />
    </Routes>
  );
}

