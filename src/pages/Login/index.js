import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext' 

import LoginForm from '../LoginForm/'
import LoginCreate from '../LoginCreate/'
import LoginPasswordLost from '../LoginPasswordLost/'
import LoginPasswordReset from '../LoginPasswordReset/'


import { Container } from './styles';

const Login = () => {
  const { login } = useContext(UserContext);

  if(login) {
    return <Navigate to="/conta" />
  }

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
