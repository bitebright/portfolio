import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.scss";
import { About, Footer, Header, Skill, Work } from "@containers/index";
import { Navbar } from "@components/index";
import { client } from "client";
import { AboutType } from "@containers/About/About";

type Props = {
  abouts: AboutType[];
};

const Home: NextPage<Props> = ({ abouts }: Props) => {
  return (
    <div className={styles.app}>
      <Head>
        <title>Tawisit</title>
        <meta name="description" content="Tawisit's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <About abouts={abouts} />
      <Work />
      <Skill />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = '*[_type == "abouts"]';
  const abouts = await client.fetch(query);

  return {
    props: {
      abouts,
    },
  };
};

export default Home;
