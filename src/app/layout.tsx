import './globals.css';
import Head from 'next/head';
import Script from 'next/script';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <html lang="en">
    <Head>
      <link rel="icon" href="/images/favicon.ico" />
      <title>The Genio.soy Post</title>
    </Head>
    <body className="min-h-screen bg-gray-100">
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PQPX6RPM"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Script id="gtm" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PQPX6RPM');
        `}
      </Script>
      {children}
    </body>
  </html>
);

export default Layout;
