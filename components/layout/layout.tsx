import Head from "next/head";

import styles from "./layout.module.scss";

export const siteTitle = "app";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <meta name="og:title" content={siteTitle} />
    </Head>
    <header>
      <h1>Clock rendered in the server </h1>
      <h2>At least the fist time</h2>
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
