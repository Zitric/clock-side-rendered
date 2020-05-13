import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";

const Home = () => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section>
      <h1>Hello world!</h1>
    </section>
  </Layout>
);

export default Home;
