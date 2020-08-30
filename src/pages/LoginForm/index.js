import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import { UserContext } from '../../contexts/UserContext';

import Input from '../../components/Input'
import Button from '../../components/Button'
import Error from '../../components/Error'

import { Section, Form, Register } from './styles';

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
    <Section className={"animeLeft"}>
      <h1 className={"title"}>Login</h1>

      <Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        <Error error={error} />
      </Form>

      <Link className={"perdeu"} to="/login/perdeu">Perdeu a senha?</Link>

      <Register>
        <h2 className={"subtitle"}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={"btnAnchor"} to="/login/criar">Cadastro</Link>
      </Register>
    </Section>
  )
}

export default LoginForm
