import './input.css';

const Input = ({ placeHolder, type}) => {
  return (
    <div class="form">
      <input 
        class="input" 
        placeholder={placeHolder}
        required="" 
        type={type} 
      />
      <span class="input-border"></span>
    </div>
  )
}

export default Input