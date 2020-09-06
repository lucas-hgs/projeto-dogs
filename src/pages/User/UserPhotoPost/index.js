import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';

import { PHOTO_POST } from '../../../utils/api';
import Error from '../../../utils/Error';

import { Section, Form, Preview } from './styles';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = useState({});

  const navigate = useNavigate();

  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    if(data) navigate('/conta');
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  }

  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    });
  }

  return (
    <Section className="animeLeft">
      <Form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? <Button disabled>Enviando</Button> : <Button>Enviar</Button>}
        <Error error={error} />
      </Form>
      <Preview>
        {img.preview && <div style={{ backgroundImage: `url('${img.preview}')` }}></div>}
      </Preview>
    </Section>
  )
}

export default UserPhotoPost
