import { useEffect } from 'react';

export const useBodyTheme = (theme) => {
  useEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);
};

