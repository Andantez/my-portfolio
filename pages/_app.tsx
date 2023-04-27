import '../styles/cssReset.css';
import '../styles/globalStyles.css';
import type { AppProps } from 'next/app';
import MainLayout from '../components/layout/MainLayout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = () => {
      isFirstMount && setIsFirstMount(false);
    };
    router.events.on('routeChangeStart', handleRouterChange);

    return () => router.events.off('routeChangeStart', handleRouterChange);
  }, [isFirstMount, router.events]);
  return (
    <MainLayout>
      <Component isFirstMount={isFirstMount} {...pageProps} />
    </MainLayout>
  );
}
