import { useEffect, useState } from 'react';

const useGetActiveTheme = () => {
  const [activeTheme, setActiveTheme] = useState<string>('');

  useEffect(() => {
    const target = document.querySelector<HTMLBodyElement>('[data-theme]')!;

    const observer = new MutationObserver(() =>
      setActiveTheme(target.dataset.theme!)
    );

    const options = { attributes: true };
    observer.observe(target, options);

    return () => observer.disconnect();
  }, []);

  return [activeTheme] as const;
};

export default useGetActiveTheme;
