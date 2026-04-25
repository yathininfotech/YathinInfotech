import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Yathin Infotech</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        {/* ✅ SEO Description */}
        <meta
          name="description"
          content="Yathin Infotech offers professional training in AI, Cloud Computing, SAP, Embedded Systems, and Full Stack Development. Build your career with industry-ready skills."
        />

        {/* ✅ Keywords */}
        <meta
          name="keywords"
          content="Yathin Infotech, AI training, Cloud computing course, SAP training, Embedded systems, Full stack development, software training institute"
        />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Yathin Infotech" />
        <meta
          property="og:description"
          content="Leading training institute for AI, Cloud, SAP, and software development courses."
        />
        <meta
          property="og:image"
          content="https://www.yathininfotech.com/logo.png"
        />
        <meta property="og:url" content="https://www.yathininfotech.com/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yathin Infotech" />
        <meta
          name="twitter:description"
          content="Learn AI, Cloud, SAP & more with Yathin Infotech."
        />
        <meta
          name="twitter:image"
          content="https://www.yathininfotech.com/logo.png"
        />

        {/* ✅ Canonical */}
        <link rel="canonical" href="https://www.yathininfotech.com/" />

        {/* ✅ Favicon (optional but important) */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  );
};

export default Layout;