const Button = ({ 
    type = "button", 
    className = "", 
    onClick, 
    children //kiag button text as a children pass koroma
  }) => {
    return (
      <button 
        type={type} 
        // className={`px-5 py-2 rounded-lg font-medium focus:outline-none focus:ring-4 ${className}`} 
        className={className}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
