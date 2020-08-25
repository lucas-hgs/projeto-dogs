import React from 'react'
import { Routes, Route } from 'react-router-dom';

import LoginForm from '../LoginForm/'
import LoginCreate from '../LoginCreate/'
import LoginPasswordLost from '../LoginPasswordLost/'
import LoginPasswordReset from '../LoginPasswordReset/'


import { Container } from './styles';

const Login = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </Container>
  )
}

export default Login
