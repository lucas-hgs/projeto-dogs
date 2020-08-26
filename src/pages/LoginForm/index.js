import React from 'react'
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import Input from '../../components/Input'
import Button from '../../components/Button'


import { Section } from './styles';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      }).then((response) => {
        console.log(response);
        return response.json();
      }).then((json) => {
        console.log(json);
      })
    }
  }

  return (
    <Section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </Section>
  )
}

export default LoginForm
