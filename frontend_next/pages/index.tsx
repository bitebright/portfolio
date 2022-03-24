import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.scss";
import { About, Footer, Header, Skill, Work } from "@containers/index";
import { Navbar } from "@components/index";
import { client, urlFor } from "client";
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
  let abouts: AboutType[] = await client.fetch(query);
  abouts.map((about) => (about.imgUrl = urlFor(about.imgUrl).url()), abouts);

  return {
    props: {
      abouts,
    },
  };
};

export default Home;
