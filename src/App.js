import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import ProtectedRoute from './utils/ProtectedRoute';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import Login from './pages/Login';
import User from './pages/User';

import { UserStorage } from './contexts/UserContext';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>  
    </>
  );
}

export default App;
