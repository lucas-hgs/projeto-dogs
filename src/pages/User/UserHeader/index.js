import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import UserHeaderNav from './UserHeaderNav';

import { Header } from './styles';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch(pathname) {
      case '/conta/postar':
        setTitle('Poste sua foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <Header>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </Header>
  )
}

export default UserHeader
