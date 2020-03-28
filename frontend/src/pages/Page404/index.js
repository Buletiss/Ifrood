import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/bread-toaster.json';
import './styles.css';

export default function Page404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='lottie-container'>
      <Lottie options={defaultOptions} width={600} height={600} />
      <span>404 Page not Found</span>
    </div>
  );
}
