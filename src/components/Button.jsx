const Button = ({ click, action }) => {
  return (
    <button 
      onClick={click} 
      className={`px-4 py-2 m-2 bg-blue-500 text-white rounded `}
    >
      {action}
    </button>
  );
};

export default Button;
