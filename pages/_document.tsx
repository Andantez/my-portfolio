import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { lora, merriweather } from '../lib/fonts';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`${lora.variable} ${merriweather.variable}`}>
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
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  );
}
