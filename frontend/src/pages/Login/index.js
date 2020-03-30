import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/delivery.json';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import './styles.css';

export default function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor, insira um e-mail válido')
      .required('O campo e-mail é obrigatório'),
    pass: Yup.string().min(6).required('O campo senha é obrigatório'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='login-container'>
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled
        width={450}
        height={450}
      />
      <h1>IFrood</h1>
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name='email' type='email' placeholder='E-mail' /> <br />
        <Input name='pass' type='password' placeholder='Password' /> <br />
        <button type='submit'>Sign In</button>
        <span>
          Não está cadastrado? <a href='/register'>Cadastre-se aqui !</a>
        </span>
      </Form>
    </div>
  );
}
