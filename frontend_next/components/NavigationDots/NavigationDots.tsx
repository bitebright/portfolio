import React from "react";
import styles from "./NavigationDots.module.scss";

type NavigationDotsProps = {
  active: string;
};

const NavigationDots: React.FC<NavigationDotsProps> = ({
  active,
}: NavigationDotsProps) => (
  <div className={styles.navigation}>
    {["home", "about", "work", "skills", "testimonial", "contact"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className={styles.navigationDot}
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      )
    )}
  </div>
);

export default NavigationDots;
