import styles from "./Navbar.module.scss";
import Image from "next/image";
import { images } from "@constants/index";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const Navbar: React.FC = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <nav className={styles.appNavbar}>
      <div className={styles.logo}>
        <Image src={images.logo} alt="logo" />
      </div>
      <ul className={styles.links}>
        {["home", "about", "contact", "work", "skills"].map((item) => (
          <li className={styles.linkItem} key={`link-${item}`}>
            <div />
            <Link href={`/${item}`}>
              <a>{item}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.menu}>
        <HiMenuAlt4 onClick={() => cycleOpen()} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            className={styles.aside}
            initial={{ width: 0 }}
            animate={{
              width: "80vw",
            }}
            exit={{
              width: 0,
              transition: { duration: 0.3 },
            }}
          >
            <HiX onClick={() => cycleOpen()} />
            <ul>
              {["home", "about", "contact", "work", "skills"].map((item) => (
                <li key={`${item}`}>
                  <Link href={`/${item}`}>
                    <a onClick={() => cycleOpen()}>{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
