import styled from 'styled-components';

import visualizacao from '../../assets/visualizacao.svg';

export const Photo = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  :nth-child(2) {
    grid-column: 2 / 4 ;
    grid-row: span 2;
  }

  @media(max-width: 40rem) {
    :nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  img {
    grid-area: 1/1;
  }

  span {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    grid-area: 1/1;
    display: none;
  }

  span::before {
    width: 16px;
    height: 10px;
    content: '';
    display: inline-block;
    margin-right: 0.25rem;
    background: url(${visualizacao}) no-repeat;
  }

  :hover span {
    display: flex;
  }

  
`;