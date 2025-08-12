import useThemeStore from '../stores/useThemeStore';

/**
 * Utility functions for conditional styling based on theme
 */

// Hook for getting theme-aware class names
export const useThemeClasses = () => {
  const { isDark } = useThemeStore();

  return {
    isDark,
    isLight: !isDark,
    theme: isDark ? 'dark' : 'light',
    
    // Common theme-based class combinations
    bg: {
      primary: isDark ? 'bg-gray-900' : 'bg-white',
      secondary: isDark ? 'bg-gray-800' : 'bg-gray-50',
      card: isDark ? 'bg-gray-800' : 'bg-white',
      input: isDark ? 'bg-gray-700' : 'bg-white',
    },
    
    text: {
      primary: isDark ? 'text-white' : 'text-gray-900',
      secondary: isDark ? 'text-gray-300' : 'text-gray-600',
      muted: isDark ? 'text-gray-400' : 'text-gray-500',
    },
    
    border: {
      default: isDark ? 'border-gray-700' : 'border-gray-200',
      light: isDark ? 'border-gray-600' : 'border-gray-300',
    },
    
    hover: {
      bg: isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100',
      text: isDark ? 'hover:text-white' : 'hover:text-gray-900',
    }
  };
};

// Utility function to conditionally apply classes
export const themeClass = (darkClass, lightClass) => {
  const { isDark } = useThemeStore.getState();
  return isDark ? darkClass : lightClass;
};

// Utility function to get theme-aware styles object
export const getThemeStyles = (darkStyles, lightStyles) => {
  const { isDark } = useThemeStore.getState();
  return isDark ? darkStyles : lightStyles;
};
