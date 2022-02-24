import styles from "./Navbar.module.scss";
import Image from "next/image";
import { images } from "@constants/index";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div>
        <Image src={images.logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
