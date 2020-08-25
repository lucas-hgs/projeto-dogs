import React from 'react';
import { Link } from 'react-router-dom';

import { NavContainer } from './styles';

const Header = () => {
  return (
    <div>
      <NavContainer>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </NavContainer>
    </div>
  )
}

export default Header
