import styled from 'styled-components';

import backgroundImage from '../../assets/login.jpg';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    display: block;
    content: '';
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &&:before {
      display: none;
    }
  }
`;

export const DivForms = styled.div`
  max-width: 30rem;
  padding: 1rem;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;
