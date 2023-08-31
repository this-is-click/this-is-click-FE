import './loginmodal.css';

import Input from './Input';

import closePath from '../../assets/auth/close.svg';

const LoginModal = ({ onClick }) => {
  return (
    <div className="login-modal">
      <div className="login-modal__container">
        <div className='login-modal__close' onClick={onClick}>
          <img src={closePath} alt='close' />
        </div>

        <p>
          자, 이게 클릭이야 
          <br />
          지금 로그인하세요.
        </p>

        <form>
          <Input placeHolder='이메일을 입력해주세요.' type='email' />

          <Input placeHolder='비밀번호를 입력해주세요.' type='password' />

          <button className='login-modal__btn'>
            로그인
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginModal;