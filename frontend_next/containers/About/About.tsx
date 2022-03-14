import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@constants/index";
import styles from "./About.module.scss";
import { useEffect, useState } from "react";
import { client, urlFor } from "client";
import { GetStaticProps } from "next";

type AboutProps = {
  abouts: AboutType[];
};

export type AboutType = {
  title: string;
  description: string;
  imgUrl: string;
};

const About: React.FC<AboutProps> = ({ abouts }: AboutProps) => {
  return (
    <>
      <h2 className={styles.headText}>
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className={styles.profile}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={styles.profileItem}
            key={about.title + index}
          >
            <div className={styles.logo}>
              <Image
                src={urlFor(about.imgUrl).url()}
                alt={about.title}
                layout="fill"
              />
            </div>
            <h2 className={styles.boldText} style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className={styles.pText} style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
