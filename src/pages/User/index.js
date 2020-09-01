import React from 'react'
import { Routes, Route } from 'react-router-dom';

import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

import Feed from '../../components/Feed';

import { Container } from './styles';

const User = () => {
  return (
    <Container>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </Container>
  )
}

export default User
