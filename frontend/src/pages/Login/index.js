import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/delivery.json';
import loading from '../../assets/taco.json';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import API from '../../services/api';
import history from '../../services/history';
import './styles.css';

export default function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor, insira um e-mail válido')
      .required('O campo e-mail é obrigatório'),
    password: Yup.string().required('O campo senha é obrigatório'),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      await API.post('http://localhost:3333/login', values);
      setIsLoading(false);
      history.push('/dashboard');
    } catch (error) {
      history.push('/');
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      {isLoading ? (
        <Lottie
          options={loadingOptions}
          width={400}
          height={400}
          style={{ marginTop: '50px' }}
        />
      ) : (
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
            <Input name='password' type='password' placeholder='Password' />
            <br />
            <button type='submit'>Sign In</button>
            <span>
              Não está cadastrado? <a href='/register'>Cadastre-se aqui !</a>
            </span>
          </Form>
        </div>
      )}
    </>
  );
}
