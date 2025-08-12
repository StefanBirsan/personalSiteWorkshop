import useThemeStore from '../stores/useThemeStore';

export const useTheme = () => {
  const { isDark, toggleTheme, setTheme, initializeTheme } = useThemeStore();

  return {
    isDark,
    toggleTheme,
    setTheme,
    initializeTheme,
    theme: isDark ? 'dark' : 'light',
    isLight: !isDark,
  };
};

export default useTheme;
