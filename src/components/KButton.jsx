const CTAButton = ({ 
  href,
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = "font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 rounded-lg";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white",
    outline: "border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white"
  };
  
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-8 py-3",
    large: "px-10 py-4 text-lg"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default CTAButton;
