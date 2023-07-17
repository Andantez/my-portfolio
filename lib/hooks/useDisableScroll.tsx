import { useEffect } from 'react';

const useDisableScroll = (isOpen: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
};

export default useDisableScroll;
