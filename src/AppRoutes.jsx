import { Route, Routes } from 'react-router-dom';
import paths from './utilities/pathnames';
import MainPage from './MainPage';
import ProductList from './ProductList';
import ProductPage from './Product';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={paths.home.path} element={<MainPage/>} />
      <Route path="/category/:categoryName" element={<ProductList />} />
      <Route path={paths.product.path} element={<ProductPage />} />
    </Routes>
  );
}
