import React from 'react'

import { Container, InputForm, LabelForm, Error } from './styles';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <Container>
      <LabelForm htmlFor={name}>{label}</LabelForm>
      <InputForm 
        id={name} 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}

export default Input
