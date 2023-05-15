export const Button = ({
  type = 'button',
  text = null,
  onClick = () => {},
  className = '',
  children,
}) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {text || children}
    </button>
  );
};
