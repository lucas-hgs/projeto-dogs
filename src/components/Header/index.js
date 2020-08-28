import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';

import { HeaderContainer, NavContainer } from './styles';

import {ReactComponent as Dogs} from '../../assets/dogs.svg'

const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <HeaderContainer>
      <NavContainer>
        <Link className="dogs" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className="login" to="/conta">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className="login" to="/login">Login / Criar</Link>
        )}
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
