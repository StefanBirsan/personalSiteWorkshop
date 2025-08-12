const SkillCard = ({ 
  name, 
  color = 'blue',
  icon,
  animationDelay = 0,
  className = ''
}) => {
  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800',
    yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800',
    green: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800',
    red: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800',
    cyan: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 hover:bg-cyan-200 dark:hover:bg-cyan-800',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800',
    orange: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-800',
    default: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
  };

  const selectedColorClass = colorClasses[color] || colorClasses.default;

  return (
    <div 
      className={`${selectedColorClass} p-4 rounded-lg text-center hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 animate-slide-in ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {icon && (
        <div className="mb-2 flex justify-center">
          {icon}
        </div>
      )}
      <span className="font-medium">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
