import { GetStaticProps } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout/layout";
import DigitalClock from "../components/ditigalClock/digital-clock";

export const getStaticProps: GetStaticProps = async () => {
  const timeFromServer = new Date().toLocaleString();
  return { props: { timeFromServer } };
};

const Home = ({ timeFromServer }) => {
  const [newTime, setNewTime] = useState(() => timeFromServer || "");
  useEffect(() => {
    setTimeout(() => {
      setNewTime(() => new Date().toLocaleString());
    }, 1000);
  });

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>{newTime && <DigitalClock time={newTime} />}</section>
    </Layout>
  );
};

export default Home;
