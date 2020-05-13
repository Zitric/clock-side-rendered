import Head from "next/head";

import styles from "./layout.module.scss";

export const siteTitle = "app";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <meta name="og:title" content={siteTitle} />
    </Head>
    <header></header>
    <main>{children}</main>
  </div>
);

export default Layout;
