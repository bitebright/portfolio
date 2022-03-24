import React from "react";
import styles from "./AppWrap.module.scss";
import { NavigationDots, SocialMedia } from "@components/index";

const AppWrap = <P extends object>(
  Component: React.ComponentType<P>,
  idName: string,
  classNames?: string
) => {
  // Try to create a nice displayName for React Dev Tools.
  const displayName = Component.displayName || Component.name || "Component";

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithAppWrap = (props: P) => {
    // props comes afterwards so the can override the default ones.
    return (
      <div id={idName} className={`${styles.container} ${classNames ?? ""}`}>
        <SocialMedia />
        <div
          className={`${styles.appWrapper} ${
            idName === "home" ? styles.noPadding : ""
          }`}
        >
          <Component {...(props as P)} />

          <div
            className={`${styles.copyright} ${
              idName === "home" ? styles.hide : ""
            }`}
          >
            <p className={styles.pText}>@2022 TAWISIT</p>
            <p className={styles.pText}>All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

  ComponentWithAppWrap.displayName = `appWrap(${displayName})`;

  return ComponentWithAppWrap;
};

export default AppWrap;
