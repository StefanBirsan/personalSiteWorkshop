import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set, get) => ({
      isDark: false,
    
      initializeTheme: () => {
        if (typeof window === 'undefined') return;
        
        const html = document.documentElement;
        const savedTheme = localStorage.getItem('theme-storage');
        let shouldBeDark = false;

        if (savedTheme) {
          try {
            const parsed = JSON.parse(savedTheme);
            shouldBeDark = parsed.state?.isDark || false;
          } catch {
            // If parsing fails, check system preference
            shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          }
        } else {
          // No saved theme, use system preference
          shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        // Apply the theme immediately
        if (shouldBeDark) {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }

        // Update store state
        set({ isDark: shouldBeDark });
      },

      // Toggle theme function
      toggleTheme: () => {
        const newIsDark = !get().isDark;
        const html = document.documentElement;

        if (newIsDark) {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }

        set({ isDark: newIsDark });
      },

      // Set theme directly
      setTheme: (isDark) => {
        const html = document.documentElement;

        if (isDark) {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }

        set({ isDark });
      }
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({ isDark: state.isDark }),
    }
  )
);

export default useThemeStore;
