import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/delivery.json';
import './styles.css';

export default function Login() {
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
      <form>
        <input type='text' placeholder='E-mail' /> <br />
        <input type='password' placeholder='Password' /> <br />
        <button type='submit'>Sign In</button>
        <span>
          Não está cadastrado? <a href='teste'>Cadastre-se aqui !</a>
        </span>
      </form>
    </div>
  );
}
