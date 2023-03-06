import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    elRef.current = document.querySelector<HTMLDivElement>('#portal');
    setIsMounted(true);
  }, []);
  return isMounted && elRef.current
    ? createPortal(children, elRef.current)
    : null;
};

export default Modal;
