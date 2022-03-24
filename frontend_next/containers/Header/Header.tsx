import { images } from "@constants/index";
import { motion } from "framer-motion";
import Image from "next/image";
import { AppWrap } from "wrapper/index";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={styles.header}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.info}
      >
        <div className={styles.badge}>
          <div className={styles.cmp}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className={styles.pText}>Hello, I am</p>
              <h1 className={styles.heading}>Tawisit</h1>
            </div>
          </div>
          <div className={styles.tag}>
            <p className={styles.pText}>Software developer</p>
            <p className={styles.pText}>Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.img}
      >
        <Image src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={styles.overlayCircle}
          src="circle.svg"
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles.circles}
      >
        {[images.flutter, images.react, images.sass].map((circle, index) => (
          <div key={`circle-${index}`} className={styles.cmp}>
            <Image src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
