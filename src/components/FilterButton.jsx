import { useTheme } from '../hooks/useTheme';

const FilterButton = ({ 
  label, 
  isActive, 
  onClick, 
  count = null 
}) => {
  const { isDark } = useTheme();

  const getButtonStyles = () => {
    if (isActive) {
      return 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg';
    }
    
    return isDark 
      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  };

  const getCountStyles = () => {
    if (isActive) {
      return 'text-blue-100';
    }
    
    return isDark 
      ? 'text-gray-400' 
      : 'text-gray-500';
  };

  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 rounded-full font-medium transition-all duration-200 
        transform hover:-translate-y-0.5 hover:shadow-md
        ${getButtonStyles()}
      `}
    >
      {label}
      {count !== null && (
        <span className={`ml-2 text-sm ${getCountStyles()}`}>
          ({count})
        </span>
      )}
    </button>
  );
};

export default FilterButton;
