import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';

import { Nav } from './styles';

import { UserContext } from '../../../../contexts/UserContext';

import { ReactComponent as MinhasFotos } from '../../../../assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../../../assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../../../assets/sair.svg';

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <Nav>
      <NavLink to="/conta" end activeClassName={'active'}>
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas" activeClassName={'active'}>
        <Estatisticas />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar" activeClassName={'active'}>
        <AdicionarFoto />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </Nav>
  )
}

export default UserHeaderNav
