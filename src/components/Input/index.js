import React from 'react'

import { Container, InputForm, LabelForm, Error } from './styles';

const Input = ({ label, type, name }) => {
  return (
    <Container>
      <LabelForm htmlFor={name}>{label}</LabelForm>
      <InputForm id={name} name={name} type={type}/>
      <Error>Error</Error>
    </Container>
  )
}

export default Input
