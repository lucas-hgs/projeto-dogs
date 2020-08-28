import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import { UserContext } from '../../contexts/UserContext';

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Section } from './styles';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <Section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </Section>
  )
}

export default LoginForm
