import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App.tsx';
import MainLayout from './MainLayout.tsx';
import BlogLayout from './BlogLayout.tsx';
import BlogHome from './Blog/BlogHome.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<App/>}/>
        </Route>
        <Route element={<BlogLayout/>}>
          <Route element={<BlogHome/>} path='/blog-home'/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
