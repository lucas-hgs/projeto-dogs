import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, NavContainer } from './styles';

import {ReactComponent as Dogs} from '../../assets/dogs.svg'

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Link className="dogs" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className="login" to="/login">Login / Criar</Link>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
