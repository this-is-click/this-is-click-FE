import './authmodal.css';

import Input from './Input';

import closePath from '../../assets/auth/close.svg';

const AuthModal = ({ onClick }) => {
  return (
    <div className="auth-modal">
      <div className="auth-modal__container">
        <div className='auth-modal__close' onClick={onClick}>
          <img src={closePath} alt='close' />
        </div>

        <p>
          자, 이게 클릭이야 
          <br />
          지금 가입하세요.
        </p>

        <form>
          <Input placeHolder='이메일을 입력해주세요.' type='email' />

          <Input placeHolder='비밀번호를 입력해주세요.' type='password' />

          <Input placeHolder='비밀번호 확인을 위해 한번 더 입력해주세요.' type='password' />

          <button className='auth-modal__btn'>
            회원가입
          </button>
        </form>
      </div>
    </div>
  )
}

export default AuthModal;