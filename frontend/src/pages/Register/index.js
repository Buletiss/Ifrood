import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/noodles.json';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import './styles.css';
// import history from '../../services/history';
import API from 'axios';

export default function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O campo nome é obrigatório'),
    email: Yup.string()
      .email('Preencha um e-mail válido')
      .required('O campo e-mail é obrigatório'),
    password: Yup.string().min(6).required('O campo senha é obrigatório'),
  });

  const handleSubmit = async (values) => {
    try {
      await API.post('http://localhost:3333/users', values);
    } catch (error) {
      console.log('deu erro');
    }
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='register-container'>
      <div className='form-side'>
        <Form onSubmit={handleSubmit} schema={schema}>
          <h1>Cadastro</h1>
          <Input name='name' placeholder='Nome' type='text' />
          <Input name='email' placeholder='E-mail' type='text' />
          <Input name='password' placeholder='Password' type='password' />
          <button type='submit'>Cadastrar!</button>
          <span>
            Já é cadastrado? <a href='/'>Clique aqui!</a>
          </span>
        </Form>
      </div>
      <div className='lottie-side'>
        <Lottie
          options={defaultOptions}
          width={500}
          height={500}
          isClickToPauseDisabled
          speed={1}
        />
      </div>
    </div>
  );
}
