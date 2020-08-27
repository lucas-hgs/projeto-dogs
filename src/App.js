import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './pages/Login';

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
            <Route path="/" element={<Home />}></Route>
            <Route path="/login/*" element={<Login />}></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>  
    </>
  );
}

export default App;
