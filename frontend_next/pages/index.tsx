import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.scss";
import { About, Footer, Header, Skill, Work } from "@containers/index";
import { Navbar } from "@components/index";

const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      <Head>
        <title>Tawisit</title>
        <meta name="description" content="Tawisit's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skill />
      <Footer />
    </div>
  );
};

export default Home;
