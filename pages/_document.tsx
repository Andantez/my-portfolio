import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id="theme" strategy="afterInteractive">
          {`
            const getThemePreference = () => {
              if ( window.localStorage.getItem('theme')) {
                return window.localStorage.getItem('theme')
              }
              return window.matchMedia('(prefers-color-scheme: light)').matches
                ? 'light'
                : 'dark'
            }
            document.body.dataset.theme = getThemePreference();
          `}
        </Script>
        <div id="portal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
