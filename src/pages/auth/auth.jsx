import './auth.css';

import { useState } from 'react';

import Button from '../../components/auth/Button'
import AuthModal from '../../components/auth/AuthModal';
import LoginModal from '../../components/auth/LoginModal';

import kakaoPath from '../../assets/auth/kakao-logo.svg';
import naverPath from '../../assets/auth/naver-logo.svg';
import googlePath from '../../assets/auth/google-logo.svg';

const Auth = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleShowRegister = () => {
    setShowRegister(!showRegister);
  };

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
    console.log(showLogin)
  };

  return (
    <>
      <div className='auth__container'>
        <div className='auth__wrap'>
          <h1 className='auth__title'>자, 이게 클릭이야!</h1>

          <p className='auth__subtitle'>지금 가입하세요.</p>

          <Button label='카카오로 로그인' image={kakaoPath} />

          <Button label='네이버로 로그인' image={naverPath} />

          <Button label='구글로 로그인' image={googlePath} />

          <p>또는</p>

          <Button label='회원가입' onClick={handleShowRegister} />

          <p>이미 가입을 하셨나요?</p>

          <Button label='로그인' onClick={handleShowLogin} />
        </div>
      </div>

      {showRegister && <AuthModal onClick={handleShowRegister} />}
      {showLogin && <LoginModal onClick={handleShowLogin} />}
    </>
  )
}

export default Auth