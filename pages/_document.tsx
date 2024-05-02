import { theme } from "@/config";
import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link
          rel="preload"
          href="/fonts/cal-sans/cal-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter/inter.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter/inter-italic.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/images/logos/logo-nextti.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/images/logos/logo-nextti.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/images/logos/logo-nextti.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/images/logos/logo-nextti.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/images/logos/logo-nextti.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/images/logos/logo-nextti.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/images/logos/logo-nextti.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/images/logos/logo-nextti.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/images/logos/logo-nextti.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/images/logos/logo-nextti.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/images/logos/logo-nextti.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/images/logos/logo-nextti.svg"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#1A202B" />
        {/* <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" /> */}
        <meta name="theme-color" content="#1A202B" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
