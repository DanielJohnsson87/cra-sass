import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footerText}>
        I'm a different component. My styles are isolated and won't affect any
        other components.
      </div>
    </div>
  );
}
