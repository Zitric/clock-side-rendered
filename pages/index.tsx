import { useState, useEffect } from "react";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout/layout";
import DigitalClock from "../components/ditigalClock/digital-clock";

const Home = () => {
  const [time, setTime] = useState(() => new Date().toLocaleString());
  useEffect(() => {
    setTimeout(() => {
      setTime(() => new Date().toLocaleString());
    }, 1000);
  });

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <DigitalClock time={time}></DigitalClock>
      </section>
    </Layout>
  );
};

export default Home;
