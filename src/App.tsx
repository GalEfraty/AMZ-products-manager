import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from './components/layout/header/Header';
import ProductsPage from './components/ProductsPage';
import NotFoundPage from './components/ErrorPages/NotFoundPage';

import './styles/app.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      staleTime: Infinity,
      notifyOnChangeProps: 'tracked',
    },
  },
});

function App() {
  return (
    <div className='main-frame'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<ProductsPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
