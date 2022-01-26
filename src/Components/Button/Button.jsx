import "./Button.css"

const Button = ({direction, text}) => {
  return <button onClick={direction}>{text}</button>;
};


export default Button