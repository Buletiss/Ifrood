import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/noodles.json';
import './styles.css';

export default function Register() {
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
        <form action=''>
          <h1>Cadastro</h1>
          <input placeholder='Nome' type='text' />
          <input placeholder='E-mail' type='text' />
          <input placeholder='Password' type='password' />
          <button type='submit'>Cadastrar!</button>
        </form>
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
