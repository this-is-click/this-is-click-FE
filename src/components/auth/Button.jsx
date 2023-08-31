import './button.css';

const Button = ({ label, image, onClick }) => {
  const getButtonClase = (label) => {
    let buttonClass = 'auth__btn';

    switch(label) {
      case '카카오로 로그인':
        buttonClass += '_kakao';
        break;
      case '네이버로 로그인':
        buttonClass += '_naver';
        break;
      case '구글로 로그인':
        buttonClass += '_google';
        break;
      case '회원가입':
        buttonClass += '_register';
        break;
      default:
        break;
    };

    return buttonClass;
  };

  return (
    <button className={getButtonClase(label)} onClick={onClick ? onClick : null}>
      { 
        image && <img src={image} alt='logo' /> 
      }
      <p className='auth__btn_label'>{label}</p>
    </button>
  )
}

export default Button