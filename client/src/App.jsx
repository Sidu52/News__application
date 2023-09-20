import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup/Signup';
import SignIn from './pages/signup/SignIn';
import Home from './pages/home/home';
import NewsPage from './pages/newspage/NewsPage';
import './assets/css/pages/SignInUp.scss';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/newspage" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
