import styled from 'styled-components';

import usuario from '../../assets/usuario.svg';

export const HeaderContainer = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 1;
  background: #fff;
  top: 0px;
`;

export const NavContainer = styled.nav`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;

  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .dogs {
    padding: 0.5rem 0;
  }

  .login{
    color: #333;
    display: flex;
    align-items: center;
  }

  .login::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${usuario}) no-repeat center center;
    margin-left: 0.5rem;
  }
`;