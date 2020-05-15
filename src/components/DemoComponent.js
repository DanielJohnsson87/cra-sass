import React from "react";
import styles from "./DemoComponent.module.scss";

export default function DemoComponent() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className={styles.header}>Welcome to the SCSS demo</h1>
      <h2 className={styles.subheader}>
        Start editing to see some magic happen!
      </h2>

      <p className={styles.text}>
        Change anything you want in the code and try it out. Once you edit and
        save some changes a fork of this repo will be created. So you cant
        destroy anything. I've added some comments in the code to try to make
        things a bit more clear.
      </p>

      <div className={styles.card}>
        <p className={styles.text}>
          Negative texts should have a different styling. They require a bit
          more letter spacing and stuff.
        </p>
      </div>

      <p className={styles.cssVariableText}>
        This color is set by a CSS variable. It comes with some limitations
        though. We can't use the css variable for calculations in Scss/less.
      </p>
      <div className={styles.cardTransparent}>
        <p className={styles.text}>
          Tail chuck hamburger pig swine t-bone pancetta jowl. Chicken meatball
          leberkas beef ribs. Alcatra ham salami meatloaf venison sausage cow.
          Bacon chicken chuck tail. Porchetta ball tip drumstick, shoulder chuck
          bacon capicola pig ground round chislic pork belly rump hamburger
          t-bone cupim.
        </p>
      </div>
    </div>
  );
}
